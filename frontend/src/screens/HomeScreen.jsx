import * as React from 'react';
import Box from '@mui/material/Box';
import CardComponent from '../components/CardComponent';
import { Button, Container } from '@mui/material';
import ReminderModal from '../components/ReminderModal';
import { useDispatch, useSelector } from 'react-redux';
import { getRemminder } from '../redux/actions/reminderAction';


function HomeScreen() {

  const [open, setOpen] = React.useState(false);

  const dispacth = useDispatch();

  const { loading, reminders, error } = useSelector((state) => state.reminder);


  React.useEffect(() => {
    dispacth(getRemminder())
  },
    [dispacth])
    

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      {loading && <p>Loading...</p>}
      <Box display='flex' justifyContent={'flex-end'}>
        <Button sx={{ m: 2, backgroundColor: 'green', color: 'white' }} onClick={handleOpen}>Add Reminder</Button>
        <ReminderModal open={open} handleClose={handleClose} />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
          gap: 2,
          margin: '50px'
        }}
      >

        {reminders.map((reminder) => (
          <CardComponent card={reminder} index={reminder.id} />
        ))}
      </Box>
    </Container>
  );
}

export default HomeScreen;
