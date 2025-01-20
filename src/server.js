require('dotenv').config();
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web')
const connection = require("./config/database")
// config template engine
configViewEngine(app)

app.use('/', webRoutes)


// simple query
connection.query(
    'SELECT * FROM Users u',
    function (err, results, fields) {
        console.log(">>> results=", results);
    }
)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})