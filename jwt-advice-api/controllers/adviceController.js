let adviceList = [
    { id: 1, text: "Stay focused on your goals" },
    { id: 2, text: "Practice coding everyday" }
];

exports.getAdviceById = (req, res) => {

    const advice = adviceList.find(a => a.id == req.params.id);

    if (!advice) {
        return res.status(404).json({ message: "Advice not found" });
    }

    res.json(advice);
};


exports.searchAdvice = (req, res) => {

    const keyword = req.query.keyword;

    const results = adviceList.filter(a =>
        a.text.toLowerCase().includes(keyword.toLowerCase())
    );

    res.json(results);
};


exports.createAdvice = (req, res) => {

    const newAdvice = {
        id: adviceList.length + 1,
        text: req.body.text
    };

    adviceList.push(newAdvice);

    res.json(newAdvice);
};


exports.updateAdvice = (req, res) => {

    const advice = adviceList.find(a => a.id == req.params.id);

    if (!advice) {
        return res.status(404).json({ message: "Advice not found" });
    }

    advice.text = req.body.text;

    res.json(advice);
};


exports.deleteAdvice = (req, res) => {

    adviceList = adviceList.filter(a => a.id != req.params.id);

    res.json({ message: "Advice deleted successfully" });
};