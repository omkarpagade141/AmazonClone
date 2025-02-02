import { User } from "../models/register.model.js";
const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
      return res.status(400).json({ error: 'Team name must be unique' });
  }
    
     
    const user = new User({
      name,
      email,
      password,
      role,
    });;

    await user.save();
    res.json(user);
  };
export default registerUser
