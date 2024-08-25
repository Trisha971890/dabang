const express = require('express');
const app = express();
const db = require('./db')
const User=require('./model/person')
app.use(express.json()); // Middleware to parse JSON request bodies

app.post('/submit', async (req, res) => {
  try {
    console.log(req)
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    });

  
    Save the user to the database
    await newUser.save();
    console.log(res,"res")
    res.status(201).send('User saved successfully');
  } catch (error) {
    res.status(500).send('Error saving user: ' + error.message);
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
