const express = require("express");
const path = require("path");
let notes = require("./db.json");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

//view routes control pages we see on screen
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// api/controller routes
app.post("/api/notes", (req, res)=>{
    /// the model which represents what goes into the database
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random()*1000)
    }
    //push newNote to notes (db.json) to create newest version of notes array
    notes.push(newNote)

    // rewrite db.json to match newest version of notes array
    fs.writeFileSync("./db.json", JSON.stringify(notes))

    // send backend updates as response to front end
    res.json(notes)
});


app.get("/api/notes", (req, res)=>{

res.json(notes)    

});



//app.delete();

//base url http://localhost:3001/
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`));
