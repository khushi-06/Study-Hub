const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000;

app.use(cors());
app.use(express.json());


// Import the route files
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute');
const getdataRoute = require('./routes/getdataRoute');

app.get('/', (req, res) => {
  res.send('hello world')
})

// Use the routes
app.use('/api/auth', registerRoute);
app.use('/api/auth', loginRoute);
app.use('/api/auth', getdataRoute);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
