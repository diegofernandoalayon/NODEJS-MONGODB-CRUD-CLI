// const {program} = require('commander')
import { program } from 'commander'
import inquirer from 'inquirer'
import {addTask, listTask, deleteTask} from './controllers/taks.controllers.js'

program.version('0.0.1')
  .description('A command line tool for managing tasks')

program.command('save').alias('s').action(async () => {
  const answers = await inquirer.prompt([
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
  ])
  addTask(answers)
})
program.command('list').alias('l').action(() => {
  listTask()
})
program.command('delete <id>').alias('d').action((id) => {
  deleteTask(id)
})
program.parse(process.argv) // nos permite recibir los argumentos pasados por consola