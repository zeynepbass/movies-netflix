import mongoose from 'mongoose'
const post=new mongoose.Schema({

  renk:{type:String, required:true},
    baslik:{type:String, required:true},
    ufakbaslik:{type:String,required:true},
  acikla:{type:String,required:true},
  aciklaiki:{type:String,required:true},
  carousel:{type:String,required:true},
   selectedFile:{type:String},
   video:{type:String,required:true},
   film:{type:String,required:true},
   top10:{type:String,required:true},
   yeni:{type:String,required:true},
   comments:{
    type:[String],
    default:[]
   },
   likeCount:{
    type:Number,
    default:0
},
goruntuCount:{
  type:Number,
  default:7
},

})
export default mongoose.model('Post',post)
