import  Jwt from "jsonwebtoken";

export const generatetoken = (users) => {
    return Jwt.sign(
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