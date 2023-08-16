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
const logout = require('./routes/logout');

app.get('/', (req, res) => {
  res.send('Hello your server has been succesfully deployed')
})

// Use the routes
app.use('/api/auth', registerRoute);
app.use('/api/auth', loginRoute);
app.use('/api/auth', getdataRoute);
app.use('', logout);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server is gracefully shutting down.');
  });
});




