const express = require('express');
const app = express();

//Required .env file for the Ports
require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello, world!')
});

//Use the line below when NO .env file is present
//app.listen(3000);

//Required when using .env file to SET PORTS
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));

module.exports = app;
