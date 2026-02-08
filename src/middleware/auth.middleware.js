import jwt from "jsonwebtoken";

const police = (req, res, next) => {
  try {
    const autHeader = req.headers.authorization;

    if (!autHeader || autHeader.startsWith("Bearer")) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }
    const token = autHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = {
      id: decoded.userId,
    };
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
export default police;
