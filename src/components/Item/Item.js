import React from 'react';
import PropTypes from 'prop-types';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  done: {
    textDecoration: 'line-through'
  },
};

class Item extends React.Component {
//  componentDidMount() {
//    this.timerId = setInterval(() => console.log('УТЕЧКА ПАМЯТИ'), 1000);
//  }

//  componentWillUnmount() {
//    clearInterval(this.timerId);
//  }

  render() {
    const {value, isDone, classes, onClickDone, id, onClickDelete } = this.props;

    return (<ListItem>
        <Checkbox
          checked={isDone}
          tabIndex={-1}
          onClick={() => onClickDone(id)}
         />
       <ListItemText primary={value} classes={
          { root:isDone && classes.done }
         } />
        <ListItemSecondaryAction>
         <IconButton
             aria-label="Comments"
             onClick={() => onClickDelete(id)}
             >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>)
  }
};

Item.propTypes= {
  value: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default withStyles(styles)(Item);
