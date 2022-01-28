const express = require("express");
const { reset } = require("nodemon");
require("../src/db/connection")

const MensRanking = require("../src/models/memes")

const app = express();
const port = process.env.PORT || 3035;
app.use(express.json());

app.post("/mens", async(req, res) => {

    try {
        const addmens = new MensRanking(req.body);
        console.log(req.body);
        addmens.save();
        let response = [];
        response["status"] = true;
        response["message"] = "ddddd";
        res.send({ "status": true, "message": "Data inserted sucessfully." });
    } catch (e) {
        res.send(e);
    }
})

app.get("/", async(req, res) => {
    res.send('Hello from the thapa');
})

app.listen(port, () => {
    console.log(`Connection is live at port no. ${port}`);
})