const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT||3000;

// db connection
// const mongoString = process.env.DATABASE_URL
// mongoose.connect(mongoString);
// const database = mongoose.connection
// database.on('error', (error) => {
//     console.log(`db error`,error)
// })

// database.once('connected', () => {
//     console.log('Database Connected');
// })

const connectDatabase = async () => {
    try {
      await mongoose.connect(process.env.DATABASE_URL);
      console.log('Database Connected');
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  connectDatabase();
// db connection end

// routes
const routes = require('./routes/users')

app.use(bodyParser.json());
app.use(express.json());
app.use('/users',routes)

app.listen(PORT,()=>{
    console.log('server started...')
})