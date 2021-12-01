const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => { 
    try{
        const bufferNotes = fs.readFileSync("notes.json");
        const stringNotes = bufferNotes.toString();
        return JSON.parse(stringNotes)
    }catch(err){
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync("notes.json", JSON.stringify(notes))
    console.log(chalk.green("SUCCESS"))
}

const addNote = (title, body) => {
    const note = { title, body }
    const allNotes = loadNotes();
    const position = allNotes.findIndex(noteEl => noteEl.title === title)
    if(position >= 0){
        console.log(chalk.red('Title exist. Try again!'))
    }else{
        allNotes.push(note)
        saveNotes(allNotes)
    }
}

module.exports = {
    addNote
}