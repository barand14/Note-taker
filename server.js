const express = require("express");
const path = require("path");
const notes = require("./db.json");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.post();


app.get();



app.delete();


app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));
