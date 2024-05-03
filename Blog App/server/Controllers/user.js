import UserModal from "../Models/userModel.js";
import bcrypt from 'bcrypt'
export const signup = async (req, res) => {
  const newPassword=await bcrypt.hash(req.body.password,10)
  try {
    const userData = {
      fullname: req.body.fullname,
      email: req.body.email,
      password: newPassword,
    };
    const result = await UserModal.create(userData);
    return res
      .status(201)
      .json({ data: result, msg: "user created successfully", status: 201 });
  } catch (err) {
    return res
      .status(500)
      .json({error:err,msg: "somthing went wrong", status: 500 });
  }
};

export const login=async(req,res)=>{
  try{
      const {email,password}=req.body;
      const userData=await UserModal.findOne({email:email})
      if(userData)
      {
        bcrypt.compare(password,userData.password, function(err, result) {
        if(result)
         {
          return res.status(200).json({msg:"User login Successfully",status:200})
         }
         else{
          return res.status(400).json({msg:"password incorrect",status:400})
         }
      });
        
      }else{
        return res.status(400).json({msg:"User not found",status:400})
      }
  }catch(err){
    return res.status(500).json({msg:"something went wrong",status:500})
  }
}