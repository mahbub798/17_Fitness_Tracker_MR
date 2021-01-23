const mongoose = require('mongoose');
require('dotenv').config()

async function connectDB() {
  mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB successfully connected'))
    .catch(err => {
      console.log('Err', err);
    })
}

module.exports = { connectDB };