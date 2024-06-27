import { User } from "../models/register.model.js";

const loginAdminController = async (req, res) => {
    const { emailLogin, passwordLogin } = req.body;
    const user = await User.findOne({ email:emailLogin });
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@', user);
     
        

    if (user) {
       
        if (user.role === 'admin' && user.password === passwordLogin) {
            req.session.user = { email: user.email, role: user.role }; // Store email and role in session
            res.status(200).json({ user: { email: user.email, role: user.role } });
        } else {
            res.status(403).json({ message: "Access denied. Admins only." });
        } 
    } else {
        res.status(401).json({ message: "Invalid email or password" });
    }

}
 export default loginAdminController;

