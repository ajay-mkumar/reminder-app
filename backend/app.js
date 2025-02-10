const express = require('express');
const userRouter = require('./routes/userRouter');
const reminderRouter = require('./routes/reminderRouter');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.use('/user', userRouter);
app.use('/reminder', reminderRouter);

app.listen(8000, () => {
    console.log('server started');
})