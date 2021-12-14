import jwt from 'jsonwebtoken';

export default (req,res,next)=>{
    try {
        const token=req.headers.authorization.split(" ")[1];
    const decode=jwt.verify(token,"hilalahmadkhanfrompakistanandfullstackwebdeveloper");
    users=decode
    next()
    } catch (e) {
        res.send("UnAuthorization")
    }
}