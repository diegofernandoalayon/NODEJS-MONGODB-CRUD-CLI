// const {program} = require('commander')
import { program } from 'commander'

program.version('0.0.1')
  .description('A command line tool for managing tasks')

program.command('save').action(() => {
  console.log('saving')
})
program.parse(process.argv) // nos permite recibir los argumentos pasados por consola