import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import React, { Component } from 'react';
import { Grid, MenuItem } from '@material-ui/core';
import './index.scss';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FlateButton from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%'
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "#2196f3"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    textAlign: "left"
  },
  menu: {
    width: 200,
  },
  h3Container: {
    display: "inline-block"
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
  textFieldSpace: {
    marginRight: "10px",
  },
  textBoxRow: {

  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  }
});


const states = [
  {
    value: 'Rajasthan',
    label: 'Rajasthan',
  },
  {
    value: 'Delhi',
    label: 'Delhi',
  }
];
const segement = [
  {
    value: 'Buses',
    label: 'Buses',
  },
  {
    value: 'Cargo',
    label: 'Cargo',
  }
];
class Activity extends Component {

  constructor(props) {
    super(props);

    this.state = {
      states: "Rajasthan",
      segement: "Buses"
    }
    debugger;
  }
  handleChange = (event, field) => {
    debugger;
    this.setState({
      [field]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container item xs={12}>
        <FormControl className={classes.container}  >
          <form autoComplete="off">
            <FormControl>
            <FormLabel component="legend">Choose activity type:</FormLabel>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={this.state.checkedA}
                      // onChange={this.handleChange('checkedA')}
                      value="checkedA"
                      color="primary"
                    />
                  }
                  label="Fuel Trial"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={this.state.checkedB}
                      // onChange={this.handleChange('checkedB')}
                      value="checkedB"
                      color="primary"
                    />
                  }
                  label="Customer meet"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={this.state.checkedF}
                      // onChange={this.handleChange('checkedF')}
                      value="checkedF"
                      color="primary"
                    />
                  }
                  label="Demo"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={this.state.checkedF}
                      // onChange={this.handleChange('checkedF')}
                      value="checkedF"
                      color="primary"
                    />
                  }
                  label="Financer Meet"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={this.state.checkedF}
                      // onChange={this.handleChange('checkedF')}
                      value="checkedF"
                      color="primary"
                    />
                  }
                  label="Other"
                />
              </FormGroup>
            </FormControl>

            <div className={classes.textBoxRow}>
              <TextField
                required
                className="text-field-flex m-r-20"
                className={classes.textFieldSpace}
                id="date"
                label="Date"
                type="date"
                //defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                label="Date of Invoice "
                margin="normal"
              />
              <TextField
                required
                id="Place"
                className={classes.textFieldSpace}
                label="Place"
                margin="normal"
              />
            </div>
            <div className={classes.textBoxRow}>
              <TextField
                required
                id="Contactperson"
                className={classes.textFieldSpace}
                label="Contact person"
                margin="normal"
              />
              <TextField
                required
                id="Contactperson#"
                className={classes.textFieldSpace}
                label="Contact person#"
                margin="normal"
              />
            </div>
            <div className={classes.textBoxRow}>
              <TextField
                required
                className={classes.textFieldSpace}
                id="TMLShare"
                label="TML Share "
                margin="normal"
              />
              <TextField
                required
                className={classes.textFieldSpace}
                id="DealerShare"
                label="Dealer Share"
                margin="normal"
              />
            </div>
            <div className={classes.textBoxRow}>
              <TextField
                required
                className={classes.textFieldSpace}
                id="TotalBudget"
                label="TotalBudget"
                margin="normal"
              />
            </div>
            <Button
              type="submit"
              variant="raised"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </FormControl>

      </Grid>
    );
  }
}

export default withStyles(styles)(Activity);
