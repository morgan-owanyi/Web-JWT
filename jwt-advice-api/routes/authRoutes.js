//Import required modules
const express = require("express");
const jwt = require("jsonwebtoken");

//creates router instance
const router = express.Router();

router.post("/login", (req, res) => {

    const { username, password } = req.body;

    // Simple user validation
    if (username === "admin" && password === "1234") {

        const user = { username: username };

        const token = jwt.sign(user, "secretkey", { expiresIn: "1h" });
//send token back to client
        res.json({
            message: "Login successful",
            token: token
        });

    } else {
//invalid credentials. Returns error message
        res.status(401).json({
            message: "Invalid credentials"
        });

    }

});

module.exports = router;