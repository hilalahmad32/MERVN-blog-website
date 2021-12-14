import jwt from 'jsonwebtoken'

export default (req,res,next)=>{
    try {
        const token=req.headers.authorization.split(" ")[1];
        const decode=jwt.verify(token,"thisiscompletemultiuserblogwebsiteinnodeandvueandalsoreact")
        req.adminsData=decode;
        next();
    } catch (error) {
        res.send("UnAuthorizationed")
    }
}

