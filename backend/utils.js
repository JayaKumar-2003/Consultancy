import  jwt from "jsonwebtoken";

export const generatetoken = (users) => {
    console.log('hrllo');
    return jwt.sign(
        {
            email: users.email,
            password :users.password,
            isAdmin:users.isAdmin,
        },
        process.env.JWT_SECRET,
        {
            expiresIn:'30d',
        }
    );
};
export const isAuth = (req,res,next)=>{
    const authorization = req.headers.authorization;
    if(authorization) {
        const token = authorization.slice(7,authorization.length);
        jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
            if(err) {
                res.status(404).send({ message: "Invalid Token" });
            }
            else {
                req.user = decode;
                next();
            }
        })
    }else {
        res.status(404).send({ message: "No Token" });
    }
};

