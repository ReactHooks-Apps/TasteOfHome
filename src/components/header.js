import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: '#ff9800',

  },
  text: {
    fontFamily: 'Raleway',
    fontWeight: 1000,
    fontSize: 48,
    fontStyle: 'italic',
    color: 'Black',
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.root} >
        <Typography className={classes.text} variant="h6">
          Taste Of Home
          </Typography>
      </AppBar>
    </div>
  );
}