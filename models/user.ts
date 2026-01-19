import mongoose,{Schema,models}from "mongoose"


interface UserI {
    name:string
    email:string
    password:string
}

const userSchema = new Schema<UserI>({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true}
    },
    {
        timestamps:true
    }
)

export const User = models.User || mongoose.model("User" , userSchema)