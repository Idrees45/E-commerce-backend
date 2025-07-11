

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
      sameSite: "None",
      path: "/",              // ✅ Important: match the cookie path used on login
      expires: new Date(0)    // ✅ Force expiry to ensure deletion
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

module.exports = userlogout;

