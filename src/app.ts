import express from "express";
import pug from "pug";
import * as path from "path";

const app = express();

app.use('/static', express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, "views"))
app.set('view engine', 'pug')
app.listen(8080, () => {
    app.get("/", (req, res) => {
        res.render('index', {
            title: 'Travel Routes',
            routes: [{name: 'Iceland 2022', path: "/iceland22"}]
        });
    })
    app.get("/iceland22", (req, res) => {
        res.render('iceland22', {
            title: 'Travel Routes',
            heading: 'Iceland 2022'
        });
    })
    console.log( `server started at http://localhost:8080`);
})
