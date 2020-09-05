import React from 'react';
import {makeStyles, withStyles} from "@material-ui/core/styles";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";


const useStyles = makeStyles(theme=>({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    button: {
        marginTop: "1rem",
        color: "#EAECEE",
        borderColor: "#EAECEE",
    },
}));
const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "F6F6F8",
        },
        "& label": {
            color: "#ABB2B9",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#F6F6F8",
            },
            "&:hover fieldset": {
                borderColor: "#F6F6F8",
            },
            "& .Mui-focused fieldset": {
                borderColor: "#F6F6F8",
            },
        },
    },
})(TextField);

const Contacts = () => {

    const classes = useStyles()
    return (
        <Box component="div" style={{ background: "#1C2833", viewport: "100vw" }}>
            <Navbar />
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{color: "#EAECEE", textAlign: "center", textTransform: "uppercase"}}>Contact Me...</Typography>
                    <InputField 
                         fullWidth={true} 
                         label="Name" 
                         variant="outlined" 
                         inputProps={{style:{ color: "#EAECEE"}}} 
                         margin="dense" 
                         size="medium"  
                    />
                    <br/>
                    <InputField
                         fullWidth={true} 
                         label="Email" 
                         variant="outlined" 
                         inputProps={{style:{ color: "#EAECEE"}}} 
                         margin="dense" 
                         size="medium" 
                    />
                    <br/>
                    <Button 
                    className={classes.button} 
                    variant="outlined" 
                    fullWidth={true} 
                    endIcon={<SendIcon />} 
                    href="mailto:maximelgm@gmail.com">
                        Contact me
                    </Button>
                </Box>
            </Grid>
        </Box>
    );
;}

export default Contacts;