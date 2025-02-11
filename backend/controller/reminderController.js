const asyncHandler = require("../Middleware/asyncHandler");
const reminderModel = require("../models/reminderModel");


const getReminders = asyncHandler(async(req, res) => {
    const reminderData = await reminderModel.findAll({
        where: {
            userId: req.user.id
        }
    });

    if (!reminderData) {
        res.status(404).json({"error": "No reminders found"});
    }
    reminders = reminderData.map(reminder => reminder.toJSON())

    res.status(200).json(reminders);
})

const addReminder = asyncHandler(async(req, res) => {
    const {reminder, reminderTime} = req.body;

    const reminderObject = await reminderModel.create({
        userId: req.user.id,
        reminder: reminder,
        reminder_time: reminderTime
    })

      res.status(200).json([reminderObject]);
})

const updateReminder = asyncHandler(async(req, res) => {
    const {reminderId } = req.params;
    const { reminder, reminder_time } = req.body;

    const reminderData = await reminderModel.findOne({
        where: {
            id: reminderId,
            userId: req.user.id
        }
    });

    if(!reminderData) {
        res.status(404).json({"error": "unable to edit"});
    }

    if (reminder) reminderData.reminder = reminder;
    if (reminder_time) reminderData.reminder_time = reminder_time;
    await reminderData.save();

    res.status(200).json({"message": "reminder updated"});
})

const deleteReminder = asyncHandler(async(req, res) => {
    const { reminderId } = req.params;

    await reminderModel.destroy({
        where: {
            id: reminderId,
            userId: req.user.id
        }
    });

    res.status(200).json({"message": "reminder deleted successfully"});
})

module.exports = { getReminders, addReminder, updateReminder, deleteReminder };