const express = require("express");

const router = express.Router();
//Import authentication middleware to protect routes
const verifyToken = require("../middleware/authMiddleware");

const adviceController = require("../controllers/adviceController");
//Route handlers for advice endpoints
router.get("/advice/:id", verifyToken, adviceController.getAdviceById);
//Search advice by keyword
router.get("/advice/search", verifyToken, adviceController.searchAdvice);
//Create new advice entry
router.post("/advice", verifyToken, adviceController.createAdvice);
//Update existing advice.
router.put("/advice/:id", verifyToken, adviceController.updateAdvice);
//Delete advice by ID
router.delete("/advice/:id", verifyToken, adviceController.deleteAdvice);
//Export router to be used in server.js
module.exports = router;