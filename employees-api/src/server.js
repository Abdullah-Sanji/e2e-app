const express = require("express");
const router = require("./routes/employees");
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

require('dotenv').config();
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors({
    origin: '*'
}));

app.use(router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
