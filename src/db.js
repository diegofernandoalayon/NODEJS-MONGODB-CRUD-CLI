import mongoose  from "mongoose"
const {MONGO_DB_URI} = process.env

export const connectDB = async () => {
  
  await mongoose.connect(MONGO_DB_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true
   }).catch((error) => {
     console.error('connect error', error.message)
   })
  
 
}
// export {connectDB}