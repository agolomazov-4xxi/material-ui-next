import React from 'react';
import DefaultLayout from '../hoc/layout/default';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui';
import {AccountBalance, KeyboardVoice} from '@material-ui/icons';
import {Link} from 'react-router-dom';

const styles = theme => ({
  root: {
    background: '#c30',
    borderRadius: 30,
    '&:hover': {
      background: '#333'
    },
    '&:active': {
      background: '#ee2b40',
    }
  },
  label: {
    color: '#fff',
    fontSize: 13,
  },
  leftIcon: {
    marginRight: 4,
    width: 20,
  }
});

const Buttons = props => {
  const {classes} = props;

  return (
    <DefaultLayout>
      <h1>Buttons Page</h1>
      <Button classes={{
        root: classes.root,
        label: classes.label
      }} mini variant="flat" disableRipple>Cool Button</Button>

      <br />
      <br />

      <Button classes={{
        root: classes.root,
        label: classes.label
      }} variant='fab'>
        <AccountBalance />
      </Button>

      <br />
      <br />

      <Button classes={{
        root: classes.root,
        label: classes.label
      }}>
        <KeyboardVoice className={classes.leftIcon} />
        Button with Icon
      </Button>

      <br />
      <br />

      <Button component={Link} to="/">Router button</Button>
    </DefaultLayout>
  );
};

export default withStyles(styles)(Buttons);
