const express = require('express')
const app = express()
const userRoutes = require('./routes/user')
const blogRoutes = require('./routes/blog')
const adminRoute = require('./routes/admin')
const auth = require('./routes/auth')
const db = require('./database/db')
const cors = require('cors'); 
const cookieparser = require('cookie-parser')


app.use(express.json());
app.use(cookieparser())

app.use(cors({ origin: 'https://bytvance.vercel.app', credentials: true }));

const port = process.env.PORT || 5000

app.get('/',(req, res)=>{
    res.send('Hii this is Bytvance')
})

app.use('/user',userRoutes)
app.use('/blog',blogRoutes)
app.use('/admin',adminRoute)
app.use('/auth',auth)


app.listen(port,()=>{
    console.log(`Server is running on port http://localhost:${port}`)
})
