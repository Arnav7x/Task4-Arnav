const express = require("express");
const app = express();

const cartRoutes = require("./routes/cart");

app.use(express.json());

app.use("/cart", cartRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
