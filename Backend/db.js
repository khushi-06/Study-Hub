const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const mongoURI = process.env.MONGO_URL;

const connectToMongo = () => {        // using async and await function so that promises can resolve
  mongoose
  .connect(mongoURI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,})
  .then(() => {
    console.log('Connected to MongoDB successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

}
module.exports = connectToMongo;