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