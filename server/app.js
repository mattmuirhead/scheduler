const express = require('express')
const connectDB = require('./config/db')

// routes
const users = require('./routes/api/users')

const app = express()

connectDB()

// use Routes
app.use('/api/users', users)

const port = process.env.PORT || 8082

app.listen(port, () => console.log(`Server running on port ${port}`))
