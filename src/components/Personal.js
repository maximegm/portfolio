import React from "react";
import { WiredCard } from "wired-card";
import { Grid } from "@material-ui/core";

export default function Personal() {
  return (
    <>
      <Grid item align="center" xs={10} sm={8} md={6}>
        <wired-card elevation="3">
          <h2>Running</h2>
          <h3>Trail and Ultra-Running</h3>
          <p>
            Training for and competing in Trail and Ultra Races.
            <br />
            <b>Longest</b> to date was a 100km race along the TRT in Lake Tahoe.
            <br />
            <b>Funnest</b> was 80km race away from and back to Stockholm in
            Sweden.
            <br />
            <b>Most wet and muddy</b> has been the 2019 SainteLyon through the
            dark hours of December.
            <br />
            Currently training for a 100 mile race... for when races return!
          </p>
        </wired-card>
        <wired-card elevation="2">
          <h2>Photography</h2>
          <h3>Creative Visual content</h3>
          <p>
            At seven I was gifted a 35mm point & shoot camera, overnight it
            became an extra limb. I couldn't put it down! I decided to learn
            everything I could to become better, and quickly found Ansel Adams
            Books. Eventually I graduated to Medium-format with my trusty
            Hasselblad and the occasional Large-format shoots.
            <br />
            At SMFA, in Boston I was able to study with Darren Lee Miller, James
            Dow, and Sandra Stark which ultimately helped me progress and learn
            to perfect on my craft.
          </p>
        </wired-card>
        <wired-card elevation="3">
          <h2>Wine & oenology</h2>
          <h3>Passionate about good wine</h3>
          <p>
            While working at a French restaurant in Boston I had the opportunity
            to learn about French wines and become the in-house wine and
            beverage director. <br />
            My journey through the regions of France stemmed a deep interest for
            old style wines, and a passion for natural and more expressive "new"
            wines. <br />
            Being surrounded by very like-minded sales reps and friends, I was
            amazed to discover what the rest of the world had to offer. The
            journey is ongoing.
          </p>
        </wired-card>
        <wired-card elevation="1">
          <h2>Languages</h2>
          <h3>Native English and French speaker</h3>
          <p>
            Fluent in English and French, having grown up in France to both
            American and French parents.
            <br />I have lived half of my life in France (Paris and Chamonix),
            and the other half in the US.
            <br />
            Hej, jag prata lite svenska!
          </p>
        </wired-card>
        <wired-card elevation="2">
          <h2>Cooking</h2>
          <h3>All about mise en place</h3>
          <p>
            Food has always been a big part of my life - except maybe during the
            college years... - cooking good with good ingredients is a ritual, a
            staple. I was always passionate about food and cooking, spending
            time wokring in restaurants and with heirloom veg purveyors.
            <br />I eventually opened and operated a restaurant. Originally I
            handled the front of house but during the second year we lost a chef
            and I jumped into the kitchen while we could find a replacement.
            <br />
            That "fix" ended up lasting a few months, I loved it, people liked
            the food, it was a fantastic experience but I wanted to keep it a
            passion and eventually returned to the front of the house.
          </p>
        </wired-card>
      </Grid>
    </>
  );
}
