import { User } from "../models/register.model.js";

const loginUserController = async (req, res) => {
    const { emailLogin, passwordLogin } = req.body;
    console.log(emailLogin);
    const user = await User.findOne({ email: emailLogin });
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@', user);



    if (user) {

        if (user.password === passwordLogin) {
            res.status(200).json( {user} );


        } else {
            res.status(403).json({ message: "Incorrect Password." });
        }
    }
    else {
        res.status(401).json({ message: "User Not Found .Please Register " });
    }

}
export default loginUserController;

