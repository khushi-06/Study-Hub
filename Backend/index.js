const connectToMongo = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const app = express()

const port = 5000

// Import the route files
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute');

app.use(bodyParser.json()); // middleware 

// Use the routes
app.use('/api/auth', registerRoute);
app.use('/api/auth', loginRoute);


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

connectToMongo();