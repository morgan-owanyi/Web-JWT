//import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const adviceRoutes = require("./routes/adviceRoutes");
//initialize express app
const app = express();

//import routes and middleware
app.use(cors());
//allows server to read json data from request body
app.use(bodyParser.json());

//register routes
app.use("/api", adviceRoutes);
app.use("/api", authRoutes);

app.get("/", (req, res) => {
    res.send("JWT Advice API Running");
});

const PORT = 3000;

//start server on port 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});