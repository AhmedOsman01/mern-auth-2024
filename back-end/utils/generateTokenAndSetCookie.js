import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
  // generate a token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  // set a cookie with the token
  res.cookie("token", token, {
    expires: new Date(Date.now() + 900000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only set cookie over https in production
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, //
  });
  return token;
};
