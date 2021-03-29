import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Xspeed from '../../pics/xspeed.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Adidas X 16+ Speed Of Light Pack"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image={Xspeed}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <p>Adidas X 16+ Speed Of Light Pack</p>
        <p>FG Soccer Cleat</p>
        <p>$249.00</p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          <ul>
              <li>100% Synthetic</li>
              <li>A Techfit upper hugs the foot, adapting to every curve for a customized fit in just seconds. This second skin like fit brings you closer to the ball so your touch and control will always be on point.</li>
              <li>The PureCut sock system covers the laces for a clean strike and touch every time.</li>
              <li>US Sizes</li>
              <li>NSG (Non-Stop- Grip) micro texture on the upper provides control in all weather conditions</li>
              <li>Purechaos Heel Lining helps to grip your foot for locked in fit. The ""S"" curve in the heel comes from adidas' extremely popular running shoe, the Ultra Boost.</li>
              <li>SprintFrame outsole reduces weight while a soft ground specific outsole is perfect for traction on soft and wet surfaces.</li>
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}