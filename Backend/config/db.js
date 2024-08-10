const dotenv = require('dotenv')
const { default: mongoose } = require('mongoose')



dotenv.config()
const MONGODB_URL = process.env.MONGODB_URL

const db = async()=>
{
    try
    {
       const con = await mongoose.connect(MONGODB_URL)
       console.log("MongoDB connected:" ,  con.connection.host)
    }
    catch(error)
    {
        console.log("MongoDB errored:", error)
    }

}

module.exports =db