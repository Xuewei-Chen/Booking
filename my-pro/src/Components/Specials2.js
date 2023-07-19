import React, { Component } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bbq from '../assets/egg.jpg'
import waffle from '../assets/waffle.jpg'



const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  const card = (
    <React.Fragment>
      <CardContent>
        <CardMedia
            component="img"
            height="140"
            image={bbq}
            alt="bbq"
            />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Appetizers
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  const card3 = (
    <React.Fragment>
      <CardContent>
        <CardMedia
            component="img"
            height="140"
            image={waffle}
            alt="bbq"
            />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Appetizers
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
class Specials2 extends Component {
  render() {
    return (
        <div>
            <Box sx={{ maxWidth: 300, position: 'relative', top: '-510px', left:'500px' }}>
                <Card variant="outlined">{card}</Card>
            </Box>
            <Box sx={{ maxWidth: 300, position: 'relative', top: '-815px', left:'850px' }}>
                <Card variant="outlined">{card3}</Card>
            </Box>
        </div>
        
    )
  }
}

export default Specials2