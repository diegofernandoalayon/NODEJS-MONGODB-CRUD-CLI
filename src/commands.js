// const {program} = require('commander')
import { program } from 'commander'
import  pkg  from 'inquirer'
const {prompt} = pkg

program.version('0.0.1')
  .description('A command line tool for managing tasks')

program.command('save').action(async () => {
  const answers = await prompt([
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
  console.log(answers)
})
program.parse(process.argv) // nos permite recibir los argumentos pasados por consola