require('./db/moongse')
const express = require('express')
const app = express()
const doctorRoutes = require('./routes/doctor')
const patientRoutes = require('./routes/patient')


const port = process.env.PORT || 3000

app.use(express.json())

app.use(doctorRoutes)
app.use(patientRoutes)

app.listen(port)