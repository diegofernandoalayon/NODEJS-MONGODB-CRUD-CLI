// const {program} = require('commander')
import { program } from 'commander'
import inquirer from 'inquirer'
import {addTask, listTask, deleteTask, updateTask} from './controllers/taks.controllers.js'

program.version('0.0.1')
  .description('A command line tool for managing tasks')
const taksQuestions = [
  {
    type: 'input',
    message: 'Task title',
    name: 'title'
  },
  {
    type: 'input',
    message: "Task description",
    name: "description",
  }
]

program.command('save').alias('s').action(async () => {
  const answers = await inquirer.prompt(taksQuestions)
  addTask(answers)
})
program.command('list').alias('l').action(() => {
  listTask()
})
program.command('delete <id>').alias('d').action((id) => {
  deleteTask(id)
})
program.command('update <id>').alias('u').action(async (id)=>{
  // console.log(id)
  const answers = await inquirer.prompt(taksQuestions)
  updateTask(id, answers)
  // console.log(answers)
})
program.parse(process.argv) // nos permite recibir los argumentos pasados por consola