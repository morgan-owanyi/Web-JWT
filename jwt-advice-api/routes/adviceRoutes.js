const express = require("express");

const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const adviceController = require("../controllers/adviceController");

router.get("/advice/:id", verifyToken, adviceController.getAdviceById);

router.get("/advice/search", verifyToken, adviceController.searchAdvice);

router.post("/advice", verifyToken, adviceController.createAdvice);

router.put("/advice/:id", verifyToken, adviceController.updateAdvice);

router.delete("/advice/:id", verifyToken, adviceController.deleteAdvice);

module.exports = router;