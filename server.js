const app = require("./app");
const dotenv = require('dotenv');


const { dbConnect } = require("./config/db");
const errorMiddleware = require("./middleware/error");

dotenv.config({path:'./config/config.env'})
dbConnect()



app.listen(process.env.PORT,()=>console.log(`server start ${process.env.PORT}`))
app.use(errorMiddleware)