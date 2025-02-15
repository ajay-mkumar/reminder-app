import * as React from 'react';
import Box from '@mui/material/Box';
import CardComponent from '../components/CardComponent';
import { Button, Container } from '@mui/material';
import ReminderModal from '../components/ReminderModal';
import { useDispatch, useSelector } from 'react-redux';
import { getReminder } from '../redux/actions/reminderAction';


function HomeScreen() {

  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const { loading, reminders, error } = useSelector((state) => state.reminder);


  React.useEffect(() => {
    dispatch(getReminder())
  },
    [dispatch])

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Box display='flex' justifyContent={'flex-end'}>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <Button sx={{ m: 2, backgroundColor: 'green', color: 'white' }} onClick={handleOpen}>Add Reminder</Button>
        <ReminderModal open={open} handleClose={handleClose} />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
          gap: 2,
          margin: '50px',
        }}
      >
        {reminders.length === 0 && <p>No reminders found</p>}
        {reminders.map((reminder) => (
          <CardComponent key={reminder.id} card={reminder} index={reminder.id} />
        ))}
      </Box>
    </Container>
  );
}

export default HomeScreen;
