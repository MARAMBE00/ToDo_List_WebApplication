const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
app.use("/public", express.static("public"));
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.render('todo.ejs');
});

app.post('/', (req, res) => {
    console.log(req.body);
});

app.listen(3000, () => console.log("Server Up and running"));