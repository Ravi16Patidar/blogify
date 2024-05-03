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
