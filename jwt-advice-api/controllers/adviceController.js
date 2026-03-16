// Temporary in-memory advice list for demonstration purposes
let adviceList = [
    { id: 1, text: "Stay focused on your goals" },
    { id: 2, text: "Practice coding everyday" }
];
// Get Advice by ID
exports.getAdviceById = (req, res) => {
    // Find advice matching the provided ID in the request parameters
    const advice = adviceList.find(a => a.id == req.params.id);
// If no advice is found, return a 404 error with a message
    if (!advice) {
        return res.status(404).json({ message: "Advice not found" });
    }

    res.json(advice);
};

// Search Advice by keyword
exports.searchAdvice = (req, res) => {

    const keyword = req.query.keyword;

    const results = adviceList.filter(a =>
        a.text.toLowerCase().includes(keyword.toLowerCase())
    );

    res.json(results);
};

//create new advice entry
exports.createAdvice = (req, res) => {

    const newAdvice = {
        id: adviceList.length + 1,
        text: req.body.text
    };

    adviceList.push(newAdvice);

    res.json(newAdvice);
};

//Update existing advice.
exports.updateAdvice = (req, res) => {

    const advice = adviceList.find(a => a.id == req.params.id);

    if (!advice) {
        return res.status(404).json({ message: "Advice not found" });
    }

    advice.text = req.body.text;

    res.json(advice);
};

//Delete advice by ID
exports.deleteAdvice = (req, res) => {

    adviceList = adviceList.filter(a => a.id != req.params.id);

    res.json({ message: "Advice deleted successfully" });
};