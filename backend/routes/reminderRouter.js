const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { getReminders, addReminder, updateReminder, deleteReminder } = require('../controller/reminderController');

const router = express.Router();

router.get('/', protect, getReminders);
router.post('/addReminder', protect, addReminder);
router.route('/:reminderId').put(protect, updateReminder).delete(protect, deleteReminder);

module.exports= router;