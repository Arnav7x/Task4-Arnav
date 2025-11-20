exports.calculateTotal = (req, res) => {
    const { items } = req.body;

    if (!Array.isArray(items)) {
        return res.status(400).json({ error: "Items array is required" });
    }

    let total = 0;

    for (let item of items) {
        if (typeof item.price !== "number" || typeof item.qty !== "number") {
            return res.status(400).json({ error: "Price and qty must be numbers" });
        }
        total += item.price * item.qty;
    }

    res.json({ total });
};
