import mongoose ,{Schema}from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new Schema({
  userName:{
    type:String,
    required:true,
    unique:true,
    lowercase:true
  },
  email:{
     type:String,
    required:true,
    lowercase:true,
    trim:true,
  },
  fullName:{
    type:String,
    required:true,
    trim:true,
    index:true,
  },
  avatar:{
    type:String,
    required:true
  },
  coverimage:{
    type:String,
  },
  watchhistory:[{
    type:Schema.Types.ObjectId,
    ref:"video"
  }
     ],
     password:{
      type:String,
      required:[true,'passeord is required']
     },
     refreshtoken:{
      type:String
     },
         },
     {
      timestamps:true

     }
)

     userSchema.pre("save",async function(next){
      if(!this.isModifed("password")) return next();
       this.password =bcrypt.hash(this.password,10)
       next()
     }),

userSchema.methods.isPasswordCorrect= async function (password) {
  return await bcrypt.compare(password,this.password)
}
  userSchema.method.generateAccessToken=function(){
   return jwt.sign(
      {
      _id: this._id,
      email: this.email,
      userName: this.username,
      fullName: this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn:process.env.ACCESS_TOKEN_EXPIRES_IN
    }
    )
    
  }
  userSchema.method.generateRefreshToken=function(){
    return jwt.sign(
      {
      _id: this._id,
      
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRES_IN
    }
    )
  }


export const User = mongoose.model("user",userSchema)
