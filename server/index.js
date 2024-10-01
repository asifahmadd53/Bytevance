const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const blogRoutes = require('./routes/blog')
const db = require('./database/db')
const cors = require('cors'); 
const cookieparser = require('cookie-parser')

app.use(express.json());
app.use(cookieparser())

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.get('/',(req, res)=>{
    res.send('Hello World')
})
const port = process.env.PORT || 4000


app.use('/user',userRoutes)
app.use('/blog',blogRoutes)


app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})