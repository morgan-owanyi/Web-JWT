const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const adviceRoutes = require("./routes/adviceRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/advice", adviceRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("JWT Advice API Running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});