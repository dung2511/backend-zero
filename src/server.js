require('dotenv').config();
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;
const webRoutes = require('./routes/web')
// config template engine
configViewEngine(app)

app.use('/', webRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})