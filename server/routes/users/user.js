import express from 'express';
const user_route = express.Router();
import User from '../../models/user.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'



user_route.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    const is_email = await User.findOne({ email: email });
    if (!is_email) {
        const new_password = await bcrypt.hashSync(password, 10);
        const users = new User({
            name: name,
            email: email,
            password: new_password
        });
        const result = await users.save();
        if (result) {
            res.send({ success: true });
        } else {
            res.send({ success: false });
        }
    } else {
        res.send({ exist: true })
    }

});

user_route.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    const userEmail = await User.findOne({ email: email });
    if (userEmail) {
        const c_password = await bcrypt.compare(password, userEmail.password);
        if (c_password) {
            const token = jwt.sign({
                user_id: userEmail._id,
                email: userEmail.email,
                name: userEmail.name,
            },'hilalahmadkhanfrompakistanandfullstackwebdeveloper')
            res.send({ token: token, success: true })
        } else {
            res.send({ success: false })
        }
    } else {
        res.send({ success: false })
    }
})

user_route.get("/users",async(req,res)=>{
  try {
    const token=req.headers.authorization.split(" ")[1];
    console.log(token);
    const users=jwt.verify(token,"hilalahmadkhanfrompakistanandfullstackwebdeveloper");
    console.log(users);
    res.send(users);
  } catch (error) {
      res.send("UnAuthorized")
  }
})

export default user_route;