import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid #808B96",
            borderRadius: "0.3rem",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid #ABB2B9",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content:"''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#1C2833 #1C2833 transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#ABB2B9"
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #1C2833 #1C2833"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontsize: "1.8rem",
        background: "#2C3E50",
        color: "#EAECEE",
        lineHeight: 1,
        borderRadius: ".3rem",
        borderColor: "#EAECEE",
        padding: "0.5rem 0 0.8rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto"
            },
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color: "#273746",
        padding: "3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "#212F3D",
        padding: "0",
        textTransform: "uppercase"
    }
    }));

export default function Timeline() {
    const classes = useStyles();
    return (
        <Box component="header" className={classes.mainContainer}>
            <Typography variant="h4" align="center" className={classes.heading}>
                Work Experience
            </Typography>
            <Box component="div" className={classes.timeLine}>
                <Typography variant="h2" 
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2020
                    </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant="h5" 
                    className={classes.subHeading}>
                        Sales Executive
                    </Typography>
                    <Typography variant="body1" style={{color: "#808B96"}}>
                        House of Beer France - Carlsberg Group
                    </Typography>
                    <Typography variant="subtitle1" style={{color: "#17202A"}}>
                        <ul>
                            <li>Maintaining client relationships, identifying and selling to prospects</li>
                            <li>Contract negotiation and implementation</li>
                            <li>Product Expert - organising events and staff trainings</li>
                            <li>Providing knowledge, guidance and recommendations to clients through 
                            strategic profit and service improvement recommendations</li>
                            <li>Maintaining and updating client base & weekly reporting</li>
                            <li>Working with Marketing and Brand Ambassadors</li>
                        </ul>                           
                    </Typography>
                </Box>
                <Typography variant="h2" 
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2017
                    </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography 
                    variant="h5" 
                    className={classes.subHeading}>
                        Founder, Owner, Beverage Director
                    </Typography>
                    <Typography 
                    variant="body1" 
                    style={{color: "#808B96"}}>
                        Bighorn Bistro & Bar - Chamonix, France
                    </Typography>
                    <Typography 
                    variant="subtitle1" 
                    style={{color: "#17202A"}}>
                        <ul>
                            <li>Managing daily operations</li>
                            <li>Accounting and payroll</li>
                            <li>Business Plan and Financial Forecast</li>
                            <li>Purchasing and inventory management</li>
                            <li>Curating beverage menu of Craft ales, ecclectic wines and fine spritis & cocktails</li>
                            <li>HR - Managing, hiring and training of FOH and BOH staff</li>
                            <li>Obtained 4 French long stay visas for US citizens to work at BB&B</li>
                        </ul>
                    </Typography>
                </Box>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography 
                    variant="h5" 
                    className={classes.subHeading}>
                        Owner, Photographer, Producer
                    </Typography>
                    <Typography 
                    variant="body1" 
                    style={{color: "#808B96"}}>
                        Maxime Gregory Productions - Chamonix, France
                    </Typography>
                    <Typography 
                    variant="subtitle1" 
                    style={{color: "#17202A"}}>
                        <ul>
                            <li>Sports, Editorial and Landscape photography</li>
                            <li>Video Production</li>
                            <li>Visual Content curation</li>
                        </ul>
                    </Typography>
                </Box>
                <Typography variant="h2" 
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2014
                    </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography 
                    variant="h5" 
                    className={classes.subHeading}>
                        Sommelier, assistant maitre d'hotel
                    </Typography>
                    <Typography 
                    variant="body1" 
                    style={{color: "#808B96"}}>
                        La Voile Boston Brasserie - Boston, MA - USA
                    </Typography>
                    <Typography 
                    variant="subtitle1" 
                    style={{color: "#17202A"}}>
                        <ul>
                            <li>Curating selection of French wines - avg of 200 individual producers</li>
                            <li>Attending industry tastings and private tastings</li>
                            <li>Organizing on-premise wine tastings and other social events</li>
                            <li>Worked with French Producers to come take part in <em>meet the Producer</em> select events and pairings</li>
                            <li>Budgeting, forecasting and accounting</li>
                            <li>Managing front of house staff</li>
                        </ul>
                    </Typography>
                </Box>
            </Box>
        </Box>
    )};