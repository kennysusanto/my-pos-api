const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

const menuController = require("./controllers/menu");
app.use("/menu", menuController);

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
