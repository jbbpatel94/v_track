
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { Link, NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    header: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-around"
    },
    paper: {
        width: "100",
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});





class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid container item xs={12} className={classes.header}>
                    <Button  component={NavLink} to="/" exact  activeStyle={{
                            fontWeight: 'bold',
                            color: '#2196f3'
                        }}>
                        Home
                    </Button>
                   
                    
                        V-track
                   
                    <Button component={NavLink} to="/login" exact  activeStyle={{
                            fontWeight: 'bold',
                            color: '#2196f3'
                        }}>
                        LogIn
                    </Button>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Header);
