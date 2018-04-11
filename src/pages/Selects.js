import React from 'react';
import DefaultLayout from '../hoc/layout/default';
import { withStyles } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import { FormGroup, FormControlLabel } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = {
  checked: {
    color: green[500],
  },
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
};

const Selects = props => {
  const {classes} = props;
  return (
    <DefaultLayout>
      <h1>Selects Page</h1>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={false}
              value="checkedA"
            />
          }
          label="Secondary"
        />
      </FormGroup>
    </DefaultLayout>
  );
};

export default withStyles(styles)(Selects);
