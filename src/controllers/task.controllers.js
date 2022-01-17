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

export const updateTask = async (id,newTask) => {
  await Task.updateOne({_id:id},newTask)
  console.log('Task Updated')
  await connection.close()
  process.exit(0)
}
export const findTaks = async (text) => {
  const search = new RegExp(text,'i')
  // const tasks = []
  const tasks = await Task.find({
    $or:[{title: search}, {description: search}]
  })
  if(tasks.length === 0){
    console.log('No tasks found')
  }else{
    console.table(
      tasks.map(task => {
        return{
          id: task._id.toString(),
          title: task.title,
          description: task.description
        }
      })
    )
  }
  await connection.close()
  process.exit(0)
}