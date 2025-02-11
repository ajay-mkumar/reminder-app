import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { useState } from 'react';

const CardComponent = ({card, index}) => {
  const [selectedCard, setSelectedCard] = useState(0);
    
    return(
    <Card>
        <CardActionArea
          onClick={() => setSelectedCard(index)}
          data-active={selectedCard === index ? '' : undefined}
          sx={{
            height: '100%',
            '&[data-active]': {
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'white',
              },
              backgroundColor:'#808080'
            },
          }}
        >
          <CardContent key={index} sx={{ height: '100%' }}>
            <Typography variant="h5" component="div">
              {card.reminder}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.reminder_time}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      )
}

export default CardComponent;