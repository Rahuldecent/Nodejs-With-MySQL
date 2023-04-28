const express = require('express');
const connection = require('./db');
const router = require('./routes/route');
const app = express();
app.use(express.json());

app.use('/',router)
app.listen(3000, () => {
    console.log("Express app running on PORT 3000" )
});