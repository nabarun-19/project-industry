import 'next-auth'
import { DefaultSession } from 'next-auth';

declare module 'next-auth'{
    interface User{
        _id?:string;
        isVerified?:boolean;
        isAcceptingMessages?:boolean;
        username?:string
    }
    interface session{
      user:{
        _id?:string;
        isVerified?:boolean;
        isAcceptingMessages?:boolean;
        username?:string
    } & DefaultSession['User']
}

}