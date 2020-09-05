import React from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core";
import Navbar from './Navbar';
import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/javascript-fullstack.jpg";
import project3 from "../images/react-redux.jpg";
import project4 from "../images/mern-stack.jpg";

const useStyles = makeStyles({
    mainContainer: {
        background: "#F6F6F8",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 315,
        margin: "5rem auto",
        boxShadow: "0 0 1rem 0 rgba(0,0,0,0.12)",
        borderRadius: "0.8rem"

    }

})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className="{classes.mainContainer}">
            <Navbar />
            <Grid container justify="center">
                <Card />
                {/* Project 1*/}
                <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project 1"
                                height="140"
                                image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                    lorem  dfsgf gsdfg sdfg dfg sdfg sdfg sdfg
                                    fd gsdf gsdfg sdfg sdfg sdfg sdfgsdf g
                                    fdsg sdfg dafg sdfg sdfg sdfg 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>
                 {/* Project 2*/}
                 <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project 2"
                                height="140"
                                image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 2
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                    lorem  dfsgf gsdfg sdfg dfg sdfg sdfg sdfg
                                    fd gsdf gsdfg sdfg sdfg sdfg sdfgsdf g
                                    fdsg sdfg dafg sdfg sdfg sdfg 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>
                 {/* Project 3*/}
                 <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project 3"
                                height="140"
                                image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 3
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                    lorem  dfsgf gsdfg sdfg dfg sdfg sdfg sdfg
                                    fd gsdf gsdfg sdfg sdfg sdfg sdfgsdf g
                                    fdsg sdfg dafg sdfg sdfg sdfg 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live demo
                                </Button>
                            </CardActions>
                        
                    </Card>
                </Grid>
                 {/* Project 4*/}
                 <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="project 4"
                                height="140"
                                image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 4
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                    lorem  dfsgf gsdfg sdfg dfg sdfg sdfg sdfg
                                    fd gsdf gsdfg sdfg sdfg sdfg sdfgsdf g
                                    fdsg sdfg dafg sdfg sdfg sdfg 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Live demo
                                </Button>
                            </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio;