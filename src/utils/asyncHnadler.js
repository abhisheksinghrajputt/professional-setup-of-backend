
const asyncHandler =(rrquestHnadler)=>{
Promise.resolve(rrquestHnadler(req,res,next))
.catch((error)=>{next(error)})
}

export {asyncHandler}













// const asyncHandler=(fn) => async(req,res,next)=>{
//   try {
    
//   } catch (error) {
//     res.send(error.code ||500).json({
//       success:false,
//       masssage:error.masssage
//     })
//   }
// }