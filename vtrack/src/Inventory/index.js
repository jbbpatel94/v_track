import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './index.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import NewEntry from './Components/NewEntry';
import NewActivity from './Components/Activity';
import Paper from '@material-ui/core/Paper';

function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
  }
const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
});

class Inventory extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value : 0,

        }
    }
    handleChange = (event, value) => {
        this.setState({ value });
      };
    
    handleChangeIndex = index => {
        debugger;
        this.setState({ value: index });
        };
  render() {
    const { classes, theme } = this.props;
    return (
        <Grid item xs={12}>
        
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Inventory" />
            <Tab label="Activity" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
        <TabContainer dir={theme.direction}><NewEntry/></TabContainer>
        <TabContainer dir={theme.direction}><NewActivity/></TabContainer>
        </SwipeableViews>
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Inventory);