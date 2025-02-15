const asyncHandler = require("../middleware/asyncHandler");
const reminderModel = require("../models/reminderModel");
const cron = require("node-cron");
const moment = require("moment");
const { SendMail } = require("../utils/SendMail");

const getReminders = asyncHandler(async (req, res) => {
    const reminderData = await reminderModel.findAll({
        where: {
            userId: req.user.id
        }
    });

    if (!reminderData) {
        res.status(404).json({ "error": "No reminders found" });
    }
    let reminders = reminderData.map(reminder => reminder.toJSON())

    res.status(200).json(reminders);
})

const getAllReminders = asyncHandler(async () => {
    const reminders = await reminderModel.findAll();

    return reminders;
})

const addReminder = asyncHandler(async (req, res) => {
    const { subject, reminder, reminderTime, email } = req.body;

    const reminderObject = await reminderModel.create({
        userId: req.user.id,
        reminder: reminder,
        reminder_time: reminderTime,
        subject: subject,
        email: email
    })

    res.status(200).json(reminderObject);
})

const updateReminder = asyncHandler(async (req, res) => {
    const { reminderId } = req.params;
    const { reminder, reminder_time } = req.body;

    const reminderData = await reminderModel.findOne({
        where: {
            id: reminderId,
            userId: req.user.id
        }
    });

    if (!reminderData) {
        res.status(404).json({ "error": "unable to edit" });
    }

    if (reminder) reminderData.reminder = reminder;
    if (reminder_time) reminderData.reminder_time = reminder_time;
    await reminderData.save();

    res.status(200).json(reminderData);
})

const deleteReminder = asyncHandler(async (req, res) => {
    const { reminderId } = req.params;

    await reminderModel.destroy({
        where: {
            id: reminderId,
            userId: req.user.id
        }
    });

    res.status(200).json({ "message": "reminder deleted successfully" });
})

const sendReminder = asyncHandler(async () => {
    const reminders = await getAllReminders();
   

    reminders.forEach((reminder) => {
        const reminderTime = moment.utc(reminder.reminder_time).local(); // Convert UTC to local
        const minute = reminderTime.minute();
        const hour = reminderTime.hour();
        const day = reminderTime.date();
        const month = reminderTime.month() + 1; // Months are 0-based, so add 1

        if (reminderTime.isBefore(moment())) {
            
        console.log(`❌ Skipping past reminder: ${reminder.reminder_time}`);
            return;
        }

        const cronExpression = `${minute} ${hour} ${day} ${month} *`;

        cron.schedule(cronExpression, () => {
            console.log(`Sending mail....`);
            SendMail(reminder.reminder, reminder.email, reminder.subject);
        })

         console.log(`📅 Reminder scheduled for ${reminder.email} on ${reminder.reminder_time}`);
    });
})
module.exports = { getReminders, addReminder, updateReminder, deleteReminder, sendReminder };