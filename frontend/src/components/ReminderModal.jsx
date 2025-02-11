import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReminder } from "../redux/actions/reminderAction";

const ReminderModal = ({ open, handleClose }) => {
    const [formData, setFormData] = useState(
        {
            reminder: '',
            reminderTime: ''
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
        const { reminder, reminderTime } = formData;
        dispacth(addReminder({ reminder, reminderTime }));
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
                            label="reminder"
                            name="reminder"
                            variant="outlined"
                            onChange={handleChange}
                            sx={{ bgcolor: 'white', borderRadius: 4, width: '100%', marginBottom: '20px' }}
                        />
                        <TextField
                            label="Date"
                            name="reminderTime"
                            variant="outlined"
                            onChange={handleChange}
                            sx={{ bgcolor: 'white', borderRadius: 4, width: '100%', marginBottom: '20px' }}
                        />
                        <Button variant="contained" type="submit">Add</Button>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default ReminderModal;