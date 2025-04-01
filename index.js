const express = require('express');
const database = require("./config/database");
require("dotenv").config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const routeAdmin = require("./routes/admin/index.route");

const app = express()
const port = process.env.PORT || 3000;

app.use(cors());

app.use(cookieParser());

app.use(methodOverride('_method'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

database.connect();

// parse application/json
app.use(bodyParser.json())

routeAdmin(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})