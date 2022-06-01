const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv/config');

const port = process.env.PORT

app.use(bodyParser.json());
app.use(cors());

//get last row
app.get('/', async(req, res) => {

    try {
        res.status(200).send("Welcome");

    } catch (err) {
        res.status(400).json({ message: err.message });
    }

});


//Import routes
const monitorRoute = require('./routes/monitor');
app.use('/monitor', monitorRoute);



//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },
    () => console.log('Connected to DB')
);



//Listening to the server
app.listen(port, () => console.log(`Listening on port: ${port} `));