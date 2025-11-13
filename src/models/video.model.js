import mongoose ,{Schema} from "mongoose"
import mongooseAggratePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema = new Schema({
videofile:{
videofile:String,
required:true
},
thumbnail:{
  type:String,
  required:true
},
tittle:{
  type:String,
  required:true
},
description:{
  type:String,
  required:true
},
duaration:{
  type:String,
  required:true
},
views:{
  type:Number,
  default:0
},
ispublish:{
  type:Boolean,
  default:true
},
owner:{
  type:Schema.Types.ObjectId,
  ref:"user"
}
},{timestamps:true})

videoSchema.plugin(mongooseAggratePaginate)
export const video =mongoose.model("video",videoSchema)