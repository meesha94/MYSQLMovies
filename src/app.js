const yargs = require ("yargs");
const { hideBin } = require("yargs/helpers");
const { addFilm, list, destroy, update } = require("./Movies/movieMethods");

const argv = yargs(hideBin(process.argv)).argv;

const app = async() => {
    if (argv.add){
        const filmObj ={
            name: argv.title,
            actor: argv.actor,
            rating: argv.rating
        }
        await addFilm(filmObj)
    } else if (argv.list){
        await list()
    } else if (argv.destroy){
        await destroy()
    } else if (argv.update){
        await update()
    }else{
        console.log('wrong query')
    }
}
app();