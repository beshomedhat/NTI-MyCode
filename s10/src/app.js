require('./db/moongse')
const express = require('express')
const app = express()
const taskRoutes = require('./routes/task')


const port = process.env.PORT || 3000

app.use(express.json())

app.use(taskRoutes)

app.listen(port)