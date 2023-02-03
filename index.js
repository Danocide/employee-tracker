const connection = require('./db/connection')
const inquirer = require('inquirer')
require('console.table')

if (connection) {
    console.log("Datebase is running")
    mainQuestion()
}


