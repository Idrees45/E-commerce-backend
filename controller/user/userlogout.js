

// const userlogout= async(req,res)=>{
//     try {
        
//         res.clearCookie("token")
//         res.json({
//             message:"logout successfully",
//             error:false,
//             success:true,
//             data:[]
//             })
//     } catch (error) {
//         res.json({
//             message:error.message||error,
//             error:true,
//             success:false
//             })
//     }
// }
// module.exports =userlogout


const userlogout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "None"
    });

    res.json({
      message: "Logout successfully",
      error: false,
      success: true,
      data: []
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false
    });
  }
};
module.exports =userlogout
