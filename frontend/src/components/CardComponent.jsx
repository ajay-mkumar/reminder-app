import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardActions, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { deleteReminder } from '../redux/actions/reminderAction';

const CardComponent = ({card, index}) => {
  const [selectedCard, setSelectedCard] = useState(0);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteReminder(index));
  }
    return(
    <Card sx={{ minWidth: 275 }}>
          <CardContent  key={index} sx={{  }}>
            <Typography variant="h5" component="div">
              {card.reminder}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.reminder_time}
            </Typography>
            </CardContent>
            <CardActions>
            <IconButton onClick={handleDelete} variant="contained" color="primary" sx={{ minWidth: 40, minHeight: 40 }}><Delete /></IconButton>
            </CardActions>
      </Card>
      )
}

export default CardComponent;