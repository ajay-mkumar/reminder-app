import { Box, Button, Modal, TextField, Typography } from "@mui/material"
import { useState } from "react";

const ReminderModal = ({open , handleClose}) => {
    const [formData, setFormData] = useState(
        {
            reminder: '',
            date: ''
        }
    )

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { reminder} = formData;
        console.log(reminder)
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
            {formData.reminder && <p style={{ color: 'white'}}>{formData.reminder}</p>}
            <Typography id='modal-modal-title' variant='h4' sx={{color: 'white'}}>Add Reminder</Typography>
            <form style={{marginTop: '20px', padding: '10px'}} onSubmit={handleSubmit}>
                <TextField 
                label='reminder'
                name="reminder"
                variant="outlined"
                onChange={handleChange}
                sx={{ bgcolor: 'white', borderRadius: 4, width: '100%', marginBottom: '20px'}}
                />
                <TextField 
                label='Date'
                variant="outlined"
                onChange={handleChange}
                sx={{ bgcolor: 'white', borderRadius: 4, width: '100%', marginBottom: '20px'}}
                />
                <Button variant="contained" type="submit">Add</Button>
            </form>
        </Box>
       </Modal>
       </>
    )
}

export default ReminderModal;