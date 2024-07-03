import { User } from "../models/register.model.js";

const loginAdminController = async (req, res) => {
    const { emailLogin, passwordLogin } = req.body;
    const user = await User.findOne({ email: emailLogin });
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@', user);



    if (user) {

        if (user.password === passwordLogin) {
            if (user.role === 'admin') {
                req.session.user = { email: user.email, role: user.role }; // Store email and role in session
                res.status(200).json({ user: { email: user.email, role: user.role } });
            } else {
                res.status(400).json({ message: 'You are not admin' });
            }

        } else {
            res.status(403).json({ message: "Incorrect Password." });
        }
    }
    else {
        res.status(401).json({ message: "User Not Found .Please Register " });
    }

}
export default loginAdminController;

