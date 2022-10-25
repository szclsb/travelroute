import express from "express";

const app = express();

app.listen(8080, () => {
    app.get("/", (req, res) => {
        res.send("hello world");
    })
    console.log( `server started at http://localhost:8080`);
})
