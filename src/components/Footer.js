import React from 'react';
import { makeStyles } from "@material-ui/styles";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import Instagram from "@material-ui/icons/Instagram";
import LinkedIn from  "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "#1C2833",
            "&:hover": {
                fill: "#ABB2B9",
                fontSize: "1.8rem",
            },
        },
    },
});

const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width="auto" style={{background: "#F6F6F8"}}>
            <BottomNavigationAction 
                className={classes.root}
                style={{padding: 0}}
                icon={<Facebook/>}
                href="https://www.facebook.com/profile.php?id=174800309"
            />
            <BottomNavigationAction 
                className={classes.root}
                style={{padding: 0}}
                icon={<Instagram/>}
                href="https://www.instagram.com/maximeontherun/"
            />
            <BottomNavigationAction 
                className={classes.root}
                style={{padding: 0}}
                icon={<LinkedIn/>}
                href="https://www.linkedin.com/in/maxime-messaoudene/"
            />
        </BottomNavigation>

    );
};

export default Footer;