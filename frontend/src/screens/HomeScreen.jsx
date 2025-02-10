import * as React from 'react';
import Box from '@mui/material/Box';
import CardComponent from '../components/CardComponent';
import { Button, Container, Modal } from '@mui/material';
import ReminderModal from '../components/ReminderModal';

const cards = [
  {
    id: 1,
    title: 'Plants',
    description: 'Plants are essential for all life.',
  },
  {
    id: 2,
    title: 'Animals',
    description: 'Animals are a part of nature.',
  },
  {
    id: 3,
    title: 'Humans',
    description: 'Humans depend on plants and animals for survival.',
  },
]; 

function HomeScreen() {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <Box display='flex' justifyContent={'flex-end'}>
        <Button sx={{ m: 2, backgroundColor: 'green', color: 'white' }} onClick={handleOpen}>Add Reminder</Button>
        <ReminderModal open={open} handleClose={handleClose}/>
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

        {cards.map((card, index) => (
          <CardComponent card={card} index={index} />
        ))}
      </Box>
    </Container>
  );
}

export default HomeScreen;
