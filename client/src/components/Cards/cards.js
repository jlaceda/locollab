import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    width: 1000,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 100
  },
  business:{
    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
     
      
        <CardMedia
          className={classes.media}
          //image="/Users/SophieOT/Documents/uwcode/projects/project3/project3team1/client/public/images/"
          title="Panera Logo"
        />
       
        <CardContent classname={classes.details}>
        <CardActionArea className="businessName">
          <Typography gutterBottom variant="h5" component="h2" className={classes.business}>
            Panera
          </Typography>
        </CardActionArea>
        <CardActionArea>
          <Typography variant="body2" color="textSecondary" component="p">
            This is where the details about the business idea go. 
            It is a brief explanation of what the business is looking to do in collaboration with another business. 
            To get specific details, the user can click the text.
            To go to the business' profile, the user clicks the name.
          </Typography>
        </CardActionArea>
        </CardContent>
   
    </Card>
  );
}
