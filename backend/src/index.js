const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
require('./db/mongoose');


const port = process.env.PORT || 8000;
//Routes
const userRouter = require('./routes/users');
const movieRouter = require('./routes/movies');

const app =express();
app.use(express.json());
app.disable('x-powered-by');


app.use("/v1/users", userRouter);
app.use("/v1/movies", movieRouter);

app.listen(port, () => console.log(`app is running on port: ${port}`));