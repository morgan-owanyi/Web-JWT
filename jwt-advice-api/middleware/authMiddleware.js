//Import JWT library
const jwt = require("jsonwebtoken");

//Middleware function to verify JWT token
function verifyToken(req, res, next) {
//Get token from Authorization header from the request
    const header = req.headers["authorization"];

    if (!header) {
        return res.status(403).json({ message: "Token required" });
    }
//Extract the token after "Bearer "
    const token = header.split(" ")[1];

    jwt.verify(token, "secretkey", (err, decoded) => {

        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }
//store decoded user information in request object for use in route handlers
        req.user = decoded;

        next();
    });
}
//Export middleware 
module.exports = verifyToken;