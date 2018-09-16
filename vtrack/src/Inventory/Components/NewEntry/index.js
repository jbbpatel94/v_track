import React, { Component } from 'react';
import { Grid, MenuItem } from '@material-ui/core';
import './index.scss';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FlateButton from '@material-ui/core/Button';
// import FormHelperText from '@material-ui/core/FormHelperText';

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
class NewEntry extends Component {

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

                        <div className={classes.textBoxRow}>
                            <TextField
                                required
                                className="text-field-flex m-r-20"
                                className={classes.textFieldSpace}
                                id="TMLInvoiceNo"
                                label="TML Invoice No"
                                margin="normal"
                                autoFocus
                            />
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
                                select
                                id="segement"
                                className={classes.textFieldSpace}
                                label="Segement"
                                className={classes.textField}
                                value={this.state.segement}
                                onChange={(e) => this.handleChange(e, 'segement')}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                margin="normal"
                            >
                                {segement.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div className={classes.textBoxRow}>
                            <TextField
                                required
                                id="ModelNo"
                                className={classes.textFieldSpace}
                                label="Model No"
                                margin="normal"
                            />
                            <TextField
                                required
                                id="ChasisNo"
                                className={classes.textFieldSpace}
                                label="Chasis No"
                                margin="normal"
                            />
                            <TextField
                                required
                                id="EngineNo"
                                className={classes.textFieldSpace}
                                label="Engine No"
                                margin="normal"
                            />
                        </div>
                        <div className={classes.textBoxRow}>
                            <TextField
                                required
                                className={classes.textFieldSpace}
                                id="PurchasedRate"
                                label="Purchased Rate"
                                margin="normal"
                            />
                            <TextField
                                select
                                id="State"
                                className={classes.textFieldSpace}
                                label="State"
                                className={classes.textField}
                                value={this.state.states}
                                onChange={(e) => this.handleChange(e, 'states')}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                margin="normal"
                            >
                                {states.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <TextField
                                required
                                className={classes.textFieldSpace}
                                id="UnitPriceofModel"
                                label="Unit Price of Model"
                                margin="normal"
                            />
                        </div>
                        <div className={classes.textBoxRow}>
                            <TextField
                                required
                                className={classes.textFieldSpace}
                                id="RDC"
                                label="RDC"
                                margin="normal"
                            />
                            <TextField
                                required
                                className={classes.textFieldSpace}
                                id="CGST"
                                label="CGST"
                                margin="normal"
                            />
                            <TextField
                                required
                                className={classes.textFieldSpace}
                                id="IGST"
                                label="IGST"
                                margin="normal"
                            />
                        </div>
                        <div className={classes.textBoxRow}>
                            <TextField
                                required
                                className={classes.textFieldSpace}
                                id="SGST"
                                label="SGST"
                                margin="normal"
                            />
                            <TextField
                                required
                                className={classes.textFieldSpace}
                                id="Cess"
                                label="Cess"
                                margin="normal"
                            />
                            <TextField
                                required
                                className={classes.textFieldSpace}
                                id="Total GST(CGST+IGST+SGST)"
                                label="TotalGST(CGST+IGST+SGST)"
                                margin="normal"
                            />
                        </div>
                        <div className={classes.textBoxRow}>
                            <h2 className={classes.h3Container}>Total Invoice Value: 8000</h2>
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

export default withStyles(styles)(NewEntry);
