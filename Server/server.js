const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoutes');

const app = express();

const UserName = encodeURIComponent('balluv7');
const Password = encodeURIComponent('Yash@123');

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${UserName}:${Password}@cluster0.a21g289.mongodb.net/netflix?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log('DB Connected');
  });

app.use('/api/user', userRoutes);

app.listen(5000, console.log('server started'));
