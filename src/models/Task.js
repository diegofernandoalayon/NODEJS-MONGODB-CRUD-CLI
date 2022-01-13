import { mongoose } from "mongoose"

const schema = new mongoose.Schema ({
  title: {
    type: String, 
    require: true
  },
  description: {
    type: String
  },
},
{
  timestamps: true,
  vesionKey: false
})