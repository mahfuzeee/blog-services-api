import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const userObject = {
    _id: user._id,
    name: user.name,
    email: user.email,
  };
  return jwt.sign(userObject, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
