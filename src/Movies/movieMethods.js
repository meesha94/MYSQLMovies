const Film = require("./movieModel");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

exports.addFilm = async (filmObj) => {
    try {
        await Film.sync()
        await Film.create(filmObj)
        console.log('movie added')
    } catch (error) {
        console.log(error)
    }
};

exports.list = async () => {
    try {
        const listOfMovies = await Film.findAll()
        console.log(listOfMovies)
    } catch (error) {
        console.log(error)
    }
};

exports.destroy = async () => {
    try {
        await Film.destroy({
            where: { name: argv.title }
        })
        console.log('deleted Movie')
    } catch (error) {
        console.log(error)
    }
};

exports.update = async () => {
    try {
        await Film.update({
            actor: argv.newActor
        }, {
            where: {
                actor: argv.actor
            }
        })
        console.log('movie updated')
    } catch (error) {
        console.log(error)
    }
};