import express from 'express'
const admin_route = express.Router();
import Admin from '../../models/admin.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import auth from '../../middleware/admin/auth.js';

// get Admins
admin_route.get("/", auth, async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const admins = jwt.verify(token, "thisiscompletemultiuserblogwebsiteinnodeandvueandalsoreact")
    if (admins.roll == 1) {
        const admin = await Admin.find();
        res.send({ admins: admin });
    } 
})

// get total collection for admin
admin_route.get("/total",auth,async(req,res)=>{
    const admins=await Admin.find();
    const total=admins.length;
    res.send({total:total});
})


// login  admin
admin_route.get("/admin", auth ,async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const admins = jwt.verify(token, "thisiscompletemultiuserblogwebsiteinnodeandvueandalsoreact")
    res.send({ admins: admins });
})

// add Admins
admin_route.post("/", auth, async (req, res) => {
    const { fullName, email, username, password, roll } = req.body;

    const is_email = await Admin.findOne({ email: email });
    if (is_email) {
        res.send({ exist: true });
    } else {
        const new_password = await bcrypt.hashSync(password, 10);
        const admins = new Admin({
            fullName: fullName,
            email: email,
            username: username,
            password: new_password,
            roll: roll,
        });
        const result = await admins.save();
        if (result) {
            res.send({ success: true })
        } else {
            res.send({ success: false })
        }
    }
});

// login admin and normal_admin
admin_route.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const adminEmail = await Admin.findOne({ email: email });
    if (adminEmail) {
        const c_password = await bcrypt.compare(password, adminEmail.password);
        if (c_password) {
            const token = jwt.sign({
                user_id: adminEmail._id,
                name: adminEmail.fullName,
                email: adminEmail.email,
                roll: adminEmail.roll,
            }, "thisiscompletemultiuserblogwebsiteinnodeandvueandalsoreact");

            res.send({ token: token, success: true });
        } else {
            res.send({ success: false });
        }
    } else {
        res.send({ success: false });
    }
})

// get admin by id
admin_route.patch("/:id", auth, async (req, res) => {
    const id = req.params.id;
    const admins = await Admin.findById({ _id: id });
    res.send({ admins: admins });
})

// update admins
admin_route.put("/:id", auth, async (req, res) => {
    const id = req.params.id;
    const { fullName, email, username, roll } = req.body;
    const admins = await Admin.findByIdAndUpdate({ _id: id }, {
        fullName: fullName,
        email: email,
        username: username,
        roll: roll
    });
    if (admins) {
        res.send({ success: true })
    } else {
        res.send({ success: false })
    }

});

// delete admin
admin_route.delete("/:id", auth, async (req, res) => {
    const id = req.params.id;
    const admins = await Admin.findByIdAndDelete({ _id: id });
    if (admins) {
        res.send({ success: true })
    } else {
        res.send({ success: false })
    }
});
export default admin_route;