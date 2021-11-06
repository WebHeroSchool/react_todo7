import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';




class InputItem extends React.Component {
  

  state = {
    inputValue: '',
    inputError: false
  };

  onButtonClick = () => {
    if (this.state.inputValue !== '') {
      this.setState({
        inputValue: ''
      });
      this.props.onClickAdd(this.state.inputValue);
    }
    else {
      this.setState({
        inputError: true
      });
    }
  };

  render() {
      return (<Grid>
         <TextField
           id="standard-basic"
           label="ДОБАВИТЬ ЗАДАНИЕ"
           variant="standard"
           fullWidth
           value={this.state.inputValue}
           error={this.state.inputError}
           onChange={event => this.setState({
             inputValue: event.target.value.toUpperCase(),
             inputError: false
            })}
         />
         <Button
           variant='contained'
           color='primary'
           fullWidth
           onClick={this.onButtonClick}
         >
         ДОБАВИТЬ
         </Button>
    </Grid>);
  }
};

export default InputItem;
