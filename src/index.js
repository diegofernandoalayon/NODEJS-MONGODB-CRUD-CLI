import 'dotenv/config'
import {connectDB} from './db.js'
import './commands.js'

async function main () {
await connectDB()

}
main()