import UserModal from "../Models/userModel.js";
export const signup = async (req, res) => {
  try {
    const userData = {
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password,
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
