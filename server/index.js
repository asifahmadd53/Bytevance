const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const db = require('./database/db')
const cors = require('cors'); 

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5174',
}));

app.get('/',(req, res)=>{
    res.send('Hello World')
})
const port = process.env.PORT || 4000


app.use('/user',userRoutes)


app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})