const chalk = require('chalk')
const { demand, demandOption } = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes.js')

//Custom yargs version
yargs.version('1.1.0')

// add, remove, read, list 


// Create 'add' command
yargs.command({

    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Title:', argv.title)
        console.log('Body:', argv.body)
    }
})

// Create 'remove' command
yargs.command({

    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log('Removing the note.')
    }
})
// Create 'list' command
yargs.command({

    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log('Listing the notes.', argv)
    }
})

// Create 'read' command
yargs.command({

    command: 'read',
    describe: 'read a note',
    handler: function(){
        console.log('Read the note.')
    }
})
yargs.parse()