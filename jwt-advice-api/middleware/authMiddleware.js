const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {

    const header = req.headers["authorization"];

    if (!header) {
        return res.status(403).json({ message: "Token required" });
    }

    const token = header.split(" ")[1];

    jwt.verify(token, "secretkey", (err, decoded) => {

        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }

        req.user = decoded;

        next();
    });
}

module.exports = verifyToken;