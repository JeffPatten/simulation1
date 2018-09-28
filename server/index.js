const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
require('dotenv').config();
const massive = require('massive'); 


massive(process.env.CONNECTION_URL).then(dbInstance => {
    console.log('database connected')    
    app.set('db', dbInstance);
})
.catch(err => console.log(err))

const app = express();
app.use( bodyParser.json() );

app.get('/api/inventory', controller.getRequest)
app.post('/api/product', controller.addProduct)

const port = process.env.PORT;
app.listen(port, () => {console.log(`Welcome to Port ${port}`)})