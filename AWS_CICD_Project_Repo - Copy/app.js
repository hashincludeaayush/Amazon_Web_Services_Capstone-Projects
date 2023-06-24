const express = require('express');
const app = express();
const {PORT = 3000} = process.env;

console.log('PORT', PORT)

app.get('/', (req, res) => res.send('Aayush Singh AWS Capstone App Js Page'))

app.listen(PORT, () => 
   console.log(`Example app listening at http://localhost:${PORT}`))