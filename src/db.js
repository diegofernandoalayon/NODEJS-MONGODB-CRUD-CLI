import mongoose  from "mongoose"

import 'dotenv/config'

const {MONGO_DB_URI} = process.env
mongoose.connect(MONGO_DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('connected to MongoDB')
}).catch((error) => {
  console.error('error connection to MongoDB', error.message)
})