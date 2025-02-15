const express = require('express');
const userRouter = require('./routes/userRouter');
const reminderRouter = require('./routes/reminderRouter');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const cron = require('node-cron');
const { sendReminder } = require('./controller/reminderController');
const app = express();

app.use(express.json());
app.use(cors({origin: 'http://localhost:3000',
  credentials: true,}));
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));

app.use('/user', userRouter);
app.use('/reminder', reminderRouter);

app.listen(8000, () => {
    console.log('server started');
})