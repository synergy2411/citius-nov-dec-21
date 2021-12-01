const yargs = require("yargs");
const { addNote } = require("./utils/notes");

yargs.command({
    command : "add",
    description : "to add new note",
    builder : {
        title : {
            type : 'string',
            require : true
        },
        body: {
            type : 'string',
            require : true
        }
    },
    handler : (args) => {
        const { title, body } = args;
        addNote(title, body)
    }
})

yargs.parse()           // Parse command line arguments


// > node index.js add --title="New Title" --body="New Title Body"
// > node index.js read --title="Some Title"
// > node index.js remove --title="Some Title"
// > node index.js list
