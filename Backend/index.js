const connectToMongo = require('./db');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000;

app.use(cors());

app.use(bodyParser.json()); // middleware 


// Import the route files
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute');
// const authRoute = require('./routes/authRoute');
const getdataRoute = require('./routes/getdataRoute');


// Use the routes
app.use('/api/auth', registerRoute);
app.use('/api/auth', loginRoute);
app.use('/api/auth', getdataRoute);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
