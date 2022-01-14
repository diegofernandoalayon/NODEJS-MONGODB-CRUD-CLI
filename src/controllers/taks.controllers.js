import Task from '../models/Task.js' 
import {connection} from '../db.js'

export const addTask = async (task) => {
  
  await Task.create(task)
  console.log('New Task Created')
  await connection.close()
}

export const listTask = async () => {
 const tasks =  await Task.find().lean()
 console.table(tasks.map(task => ({
   _id: task._id.toString(),
   title: task.title,
   description: task.description
 })))
 await connection.close()
 process.exit(0) //para indicar a node que el programa acabo bien, y que no mantenga a la espera 
}

export const deleteTask = async (id) => {
  const noteDeleted = await Task.findByIdAndDelete(id)
  console.table([{
    _id: noteDeleted._id.toString(),
    title: noteDeleted.title,
    description: noteDeleted.description
  }])
  console.log('Deleted!!')
  
  await connection.close()
  process.exit(0)
}