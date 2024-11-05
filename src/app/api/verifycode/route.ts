import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function POST(request:Request){
    await dbConnect()

    try {

        const {username,code}=await request.json()

        const decodedUsername=decodeURIComponent(username)
        const user=await UserModel.findOne({username:decodedUsername})
    

        if(!user){
            return Response.json({
                success:false,
                message:"user not found"
            },{status:500})
        }

        const isCodeValid=user.verifyCode===code
        const isCodeNotExpired=  new Date(user.VerifyCodeExpiry)>new Date()
    

      if(isCodeValid && isCodeNotExpired){
        user.isVerified=true
        await user.save()

        return Response.json({
            success:true,
            message:"Account verified success"
        },{status:200})

      }

      else if(!isCodeNotExpired){
        return Response.json({
            success:false,
            message:"Veerification code is expired. Please sign up again to get a new code"
        },{status:400})
      }
      else{
        return Response.json({
            success:false,
            message:"Incorrect Verification code"
        },{status:400})
      }



    } catch (error) {
        console.log("verifying user error ",error)
        return Response.json({
            success:false,
            message:"Error verifying user"
        },{status:500})
        
    }    
}