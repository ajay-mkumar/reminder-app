import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReminder } from "../redux/actions/reminderAction";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs from "dayjs";

const ReminderModal = ({ open, handleClose }) => {
    const [formData, setFormData] = useState(
        {
            subject: '',
            reminder: '',
            reminderTime: dayjs(),
            email: ''
        }
    )

    const dispacth = useDispatch();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispacth(addReminder(formData));
        handleClose();
    }
    
    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'black',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2
                }}>
                    
                    <Typography id='modal-modal-title' variant='h4' sx={{ color: 'white' }}>Add Reminder</Typography>
                    <form style={{ marginTop: '20px', padding: '10px' }} onSubmit={handleSubmit}>
                        <TextField
                            label="Subject"
                            name="subject"
                            variant="outlined"
                            onChange={handleChange}
                            sx={{ bgcolor: 'white', borderRadius: 4, width: '100%', marginBottom: '20px' }}
                        />
                         <TextField
                            label="Reminder"
                            name="reminder"
                            variant="outlined"
                            onChange={handleChange}
                            sx={{ bgcolor: 'white', borderRadius: 4, width: '100%', marginBottom: '20px' }}
                        />
                         <TextField
                            label="Email"
                            name="email"
                            variant="outlined"
                            onChange={handleChange}
                            sx={{ bgcolor: 'white', borderRadius: 4, width: '100%', marginBottom: '20px' }}
                        />
                        <LocalizationProvider  dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="when you would like to be reminded?"
                            name="reminderTime"
                            variant="outlined"
                            onChange={(value) => setFormData({...formData,reminderTime: value})}
                            renderInput={(params) => <TextField {...params} />}
                            sx={{ bgcolor: 'white', borderRadius: 4, width: '100%', marginBottom: '20px' }}
                        />
                        </LocalizationProvider>
                        <Button variant="contained" type="submit">Add</Button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default ReminderModal;