import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Skill
          </Typography>
          <Typography variant="h5" component="h2">
            Photography
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Analog & Digital
          </Typography>
          <Typography variant="body2" component="p">
            {bull}Current work can be viewed at{" "}
            <a href="https://www.maximegregory.com/">Maxime Gregory Visuals</a>
            <br />
            {bull}Film processing - <i>C41 and B&W</i>
            <br />
            {bull}Working with various film formats, 35mm, 120, 4x5
            <br />
            {bull}Fluent with Lightroom, Photoshop and Phocus
            <br />
            {bull}Comfortable working with lighting setups, from single strobe
            to more elaborate set ups, in <i>and</i> outdoors
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Skill
          </Typography>
          <Typography variant="h5" component="h2">
            Business to Business Sales
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Sales
          </Typography>
          <Typography variant="body2" component="p">
            {bull}Selling to Directors, Purchasers and Industry specialists
            <br />
            {bull}Goal and result oriented
            <br />
            {bull}Negotiation skills, resilience and pragmatism
            <br />
            {bull}Excelling as a recognized product expert and hosting staff
            trainings & trade events
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Skill
          </Typography>
          <Typography variant="h5" component="h2">
            Direct to Consumer Sales
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Sales
          </Typography>
          <Typography variant="body2" component="p">
            {bull}Targeting customers and maintaining exsisting customer base
            <br />
            {bull}Building trust across network
            <br />
            {bull}Selling effectively and tactically
            <br />
            {bull}Finding new clients using latest technologies and resources
            <br />
            {bull}Following through with order and purchasing process
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Skill
          </Typography>
          <Typography variant="h5" component="h2">
            Management
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            HR
          </Typography>
          <Typography variant="body2" component="p">
            {bull}Managing staff - up to 20
            <br />
            {bull}Deciding effectively under pressure and delegating when
            necessary
            <br />
            {bull}Building a culture of trust and encouragement
            <br />
            {bull}
            <i>beverage ind.</i>--Training and mentoring: creating confident &
            knowledgeable product experts
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Skill
          </Typography>
          <Typography variant="h5" component="h2">
            Hiring & Recruiting
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            HR
          </Typography>
          <Typography variant="body2" component="p">
            {bull}Going through applications and interview process
            <br />
            {bull}Onboarding new recruits with best practices and
            guidelines/guidebook
            <br />
            {bull}Mentoring, guiding and following up with succesful integration
            <br />
            {bull}Assessing skillset and re-evaluating position & role if
            necessary/beneficial
          </Typography>
        </CardContent>
      </Card>
      {/* <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Skill
          </Typography>
          <Typography variant="h5" component="h2">
            Sales & Marketing
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Marketing
          </Typography>
          <Typography variant="body2" component="p">
            Social media and targeted marketing
            <br />
            Using localized ads to target specific customer base
            <br/>
            
          </Typography>
        </CardContent>
      </Card> */}
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            License/Certificate
          </Typography>
          <Typography variant="h5" component="h2">
            Distribution, Market Power & Investigations
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <i>Carlsberg Group</i> - 06/2020
          </Typography>
          <Typography variant="body2" component="p">
            {bull}Market Power
            <br />
            {bull}Pricing & Sales
            <br />
            {bull}M.P. Dominance
            <br />
            {bull}Restrictions & rules
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            License/Certificate
          </Typography>
          <Typography variant="h5" component="h2">
            Competition Compliance
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <i>Carlsberg Group</i> - 06/2020
          </Typography>
          <Typography variant="body2" component="p">
            {bull}Cartels & anti-competitive agreements
            <br />
            {bull}Monopoly & market power
            <br />
            {bull}Mergers & Acquisitions
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            License/Certificate
          </Typography>
          <Typography variant="h5" component="h2">
            Sales & Sales techniques
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <i>Carlsberg Group</i> - 11/2019
          </Typography>
          <Typography variant="body2" component="p">
            {bull}Sales tehcniques, and processes
            <br />
            {bull}Negotiation skills
            <br />
            {bull}Sales process, from research to sale
            <br />
            {bull}Adapting technique to each client and situation
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Skill
          </Typography>
          <Typography variant="h5" component="h2">
            Programming - React.js
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Various - html, css, js, Python
          </Typography>
          <Typography variant="body2" component="p">
            {bull}During the forced confinement period I had the opportunity to
            develop my coding & programming skills
            <br />
            {bull}Eric Matthes' Python Crash Course
            <br />
            {bull}React.js, along with Redux, babel and node.js (and Next.js for
            APIs with MongoDB)
            <br />
            {bull}Designed this website with my react skills and the 80/20
            coding tutorials
            <br />
            {bull}My first active project was my photography website:{" "}
            <a href="https://www.maximegregory.com/">Maxime Gregory Visuals</a>{" "}
            - 08/2020
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
