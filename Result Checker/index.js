const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");   

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine","ejs");
app.set("views", path.join(__dirname));

app.get("/", (req, res) => {
    res.render("Form",{result:" "});
});

app.post("/form", (req, res) => {
    const roll = req.body.roll;
    let list = [1234, 2345, 3456, 4567, 5678];

    for (let i = 0; i < list.length; i++) {
        if (list[i] == parseInt(roll)) {
            return res.render("Form",{result:"PASS"});
        }
    }
    return res.render("Form",{result:"FAIL"});
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});