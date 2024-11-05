import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { z } from "zod";

import { usernameValidation } from "@/schemas/signupSchema";

const Usernamequeryschema=z.object({
    username:usernameValidation
})

