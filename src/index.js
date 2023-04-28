const express = require('express');
const router = require('./routes/route');
const app = express();
require('./models')
app.use(express.json());

app.use('/',router)
app.listen(3000, () => {
    console.log("Express app running on PORT 3000" )
});