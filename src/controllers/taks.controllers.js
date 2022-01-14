import Task from '../models/Task.js' 
import {connection} from '../db.js'
export const addTask = async (task) => {
  
  console.log(task)
  await Task.create(task)
  await connection.close()
}