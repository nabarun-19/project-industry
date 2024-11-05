import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { z } from "zod";

import { usernameValidation } from "@/schemas/signupSchema";

const Usernamequeryschema=z.object({
    username:usernameValidation
})

export async function GET(request:Request){
    await dbConnect()
    

    try{
        const {searchParams}=new URL(request.url)
        const queryParam={
            username:searchParams.get('username')
        }

    //validate with zod

      const result=  Usernamequeryschema.safeParse(queryParam)
      console.log(result)

      if(!result.success){
        const usernameErrors=result.error.format().username?._errors||[]
        return Response.json({
            success:false,
            message:"invalid query parameter"
        },{status:400})
      }

    const {username}=result.data

    

    const existingVerifiedUser= await UserModel.findOne({username,isVerified:true})
    if(existingVerifiedUser){
        return Response.json({
            success:false,
            message:"Username is already taken"
        },{status:400})
    }
    return Response.json({
        success:true,
        message:"Username is unique"
    },{status:400})


    }catch(error){
        console.log("Error check username",error)
        return Response.json({
            success:false,
            message:"error checking username"
        },{status:500})
    }
}