import express from "express";
import pug from "pug";
import * as path from "path";

const app = express();

app.set('views', path.join(__dirname, "assets", "views"))
app.set('view engine', 'pug')
app.listen(8080, () => {
    app.get("/", (req, res) => {
        res.render('index', {
            title: 'Hey',
            message: 'Hello there!'
        });
    })
    console.log( `server started at http://localhost:8080`);
})
