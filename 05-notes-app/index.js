const yargs = require("yargs");
const { addNote, removeNote } = require("./utils/notes");

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

yargs.command({
    command : "remove",
    description : "to remove one note",
    builder : {
        title : {
            require : true,
            type : 'string'
        }
    },
    handler : (args) => {
        removeNote(args.title)
    }
})

yargs.parse()           // Parse command line arguments


// > node index.js add --title="New Title" --body="New Title Body"
// > node index.js read --title="Some Title"
// > node index.js remove --title="Some Title"
// > node index.js list
