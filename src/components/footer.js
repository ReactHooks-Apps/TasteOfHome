import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
    fontFamily: 'Raleway',
    fontWeight: 700,
    fontSize: 32,
    fontStyle: 'italic',
    color: 'Black',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    background: '#ff9800'
  },

}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Typography className={classes.text} variant="h3" >
        About us
        </Typography>
    </AppBar>

  )
}