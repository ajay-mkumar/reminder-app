import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CardActionArea, CardActions, IconButton, TextField } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { deleteReminder, updateReminder } from '../redux/actions/reminderAction';

const CardComponent = ({ card, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardData, setcardData] = useState(card);
  const dispatch = useDispatch();
  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cardRef.current && !cardRef.current.contains(e.target)) {
        setIsEditing(false);
        dispatch(updateReminder(index, cardData));
      }
    };
    if (isEditing) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing, cardData, dispatch, index]);

  const handleChange = (e) => setcardData({ ...cardData, [e.target.name]: e.target.value })
  
  const handleDelete = () =>  dispatch(deleteReminder(index));

  return (
    <Card sx={{ minWidth: 275 }} ref={cardRef}>
      <CardActionArea onClick={() => setIsEditing(true)}>
        <CardContent key={index} >
          <Typography variant="h5" component="div">
            {!isEditing && cardData.reminder}
            {isEditing && <TextField value={cardData.reminder} name="reminder" onChange={handleChange} />}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardData.reminder_time}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton onClick={handleDelete} variant="contained" color="primary" sx={{ minWidth: 40, minHeight: 40 }}><Delete /></IconButton>
      </CardActions>
    </Card>
  )
}

export default CardComponent;