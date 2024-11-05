import mongoose,{Schema,Document} from "mongoose";
import { Date } from "mongoose";

export interface Message extends Document{
    content:string;
    createdAt:Date
}

const MessageSchema:Schema<Message>=new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:DataView,
        required:true,
        default:Date.now
    }

})

export interface User extends Document{
   username:string;
   email:string;
   password:string;
   verifyCode:string;
   VerifyCodeExpiry:Date;
   isVerified:boolean;
   isAcceptingMessage:boolean;
   message:Message[];
   Usercourse:string;
   UserMentorname:string;
   Userquizscore:number;
   Userfeedback:string
}

const UserSchema:Schema<User>=new Schema({
        username:{
            type:String,
            required:[true,"username is required"],
            trim:true,
            unique:true
        },
        email:{
            type:String,
            required:[true,"email is required"],
            unique:true,
            match:[/.+\@.+\..+/,"please use a valid email address"]
        },
        password:{
            type:String,
            required:[true,"password is required"]
        },
        verifyCode:{
            type:String,
            required:[true,"verifycode is required"]
        },

        VerifyCodeExpiry:{
            type:Date,
            required:[true,"verifycodeExpiry is required"]
        },
        isVerified:{
            type:Boolean,
            default:false
        },
        isAcceptingMessage:{
            type:Boolean,
            default:true
        },
        message:[MessageSchema],

        Usercourse:{
            type:String,
            required:[true,"Usercourse is required"]
            

        },
        UserMentorname:{
            type:String,
            required:[true,"UserMentor is required"]
        },

        Userquizscore:{
            type:Number,
            required:[true,"Userquizscore is required"]
        },
        Userfeedback:{
             type:String
        }


})

const UserModel=(mongoose.models.User as mongoose.Model<User>)||mongoose.model<User>("User",UserSchema)

export default UserModel;