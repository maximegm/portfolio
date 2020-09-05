/* copy of index.js with particles */

import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    mainContainer: {
        background: "#E3E3E3",
    },
    particlesCanva: {
        position: "absolute",
        opacity: "0.3"
    }
})

const Home = () => {
    const classes = useStyles()
    return (
        <>
            <Navbar />
            <Header />
            <Particles 
            canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value:45,
                            density: {
                                enable: true,
                                value_Area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke:{
                                width: 1,
                                color: "tomato"
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            animation: {
                                enable: false,
                                speed: 6,
                                size_min: 0.1,
                                sync: false
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}
            />
        </>
    );
};

export default Home;
