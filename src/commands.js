// const {program} = require('commander')
import { program } from 'commander'
import inquirer from 'inquirer'
import {addTask, listTask} from './controllers/taks.controllers.js'

program.version('0.0.1')
  .description('A command line tool for managing tasks')

program.command('save').action(async () => {
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
    },
    // {
    //   type:'list',
    //   message: 'hola',
    //   name: 'todo',
    //   choices: ['nana','nanita', 'nada']
    // }
  ])
  addTask(answers)
})
program.command('list').action(() => {
  listTask()
})
program.parse(process.argv) // nos permite recibir los argumentos pasados por consola