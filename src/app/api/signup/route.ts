import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt  from 'bcryptjs'
import { date } from "zod";
import { Date } from "mongoose";

export async function POST(request:Request){
    await dbConnect()

    try{
       const {username,email,password} = await request.json()
      const existingUserVerifiedByUsername= await UserModel.findOne({
        username,
        isVerified:true
       })
       if(existingUserVerifiedByUsername){
         return Response.json({
            success:false,
            message:"Username is already taken"
         },{status:400})
       }

       const existingUserVerifiedByEmail=await UserModel.findOne({email})
       const verifyCode=Math.floor(100000+Math.random()*900000).toString()

       
       if(existingUserVerifiedByEmail){
        if(existingUserVerifiedByEmail.isVerified){
            return Response.json({
                success:false,
                message:"User already exist with this email"
            },{status:500})
        }else{
            const hassedpassword=await bcrypt.hash(password,10)
            existingUserVerifiedByEmail.password=hassedpassword;
            existingUserVerifiedByEmail.verifyCode=verifyCode;
            existingUserVerifiedByEmail.VerifyCodeExpiry=new Date(Date.now()+3600000)
           await existingUserVerifiedByEmail.save()
        }
       }else{
        const hassedpassword=await bcrypt.hash(password,10)
        const expirydate=new Date()
        expirydate.setHours(expirydate.getHours()+1)

        const newUser= new UserModel({
            username,
            email,
            password:hassedpassword,
            verifyCode,
            VerifyCodeExpiry:expirydate,
            isVerified:false,
            isAcceptingMessage:true,
            message:[],
           
       })
       await newUser.save()
    }

    //send verification email
     const emailResponse=await sendVerificationEmail(
        email,
        username,
        verifyCode
    )
    if(emailResponse.success){
        return Response.json({
            success:false,
            message:emailResponse.message
        },{status:500})
    }
    return Response.json({
        success:true,
        message:"User registered successfully. Please verify your email"
    },{status:500})
    
    }catch(error){
        console.log("Eroor registering user",error)
        return Response.json(
            {
                success:false,
                message:"error registering user"
            },
            {
                status:500
            }
        )
    }
}