import Task from '../models/Task.js' 

export const addTask = async (task) => {
  
  console.log(task)
  await Task.create(task)
}