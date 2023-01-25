const express = require("express")
const con = require("./routes/db-config.js")
const app = express()
const cookie = require("cookie-parser");
const port = 5000;
app.use("/js", express.static(__dirname + "./public/js"))
app.use("/css", express.static(__dirname + "./public/css"))
app.set("view engine", "ejx")
app.set("views", "./views")
app.use(cookie())
app.use(express.json())
con.connect((err) => {
    if (err) console.log("err");
    else console.log("connected");
})
app.listen(port)
app.use("/", require("./routes/pages"))