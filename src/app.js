const yargs = require ("yargs");
const { hideBin } = require("yargs/helpers");
const { addFilm, list } = require("./Movies/movieMethods");
const argv = yargs(hideBin(process.argv)).argv;

const app = async() => {
    if (argv.add){
        const filmObj ={
            name: argv.title,
            actor: argv.actor
        }
        await addFilm(filmObj)
    } else if (argv.list){
        await list()
    } else{
        console.log('wrong query')
    }
}
app();