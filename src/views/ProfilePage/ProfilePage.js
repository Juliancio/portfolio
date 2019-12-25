import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardActions, CardContent, CardMedia, CardHeader, Card, Button }
  from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import CodeIcon from '@material-ui/icons/Code';
import profile from "assets/img/faces/2215078.jpg";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import IconButton from "@material-ui/core/IconButton";
import './style.css'

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        brand="Juliâncio Carvalho"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <div style={{ height: "500px" }}>
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div>
                    <Typography variant="h3" style={{ marginTop: '-30px' }} >
                      Juliâncio Carvalho
                    </Typography>
                    <h4 style={{ marginTop: "0px" }}>Frontend Developer</h4>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p style={{ fontSize: "18px" }}>
                I am a Frontend developer with industry experience building
                websites and web applications. I work with JavaScript, React,
                HTML5, CSS3 and Bootstrap.{" "}
              </p>
            </div>
            <div style={{ textAlign: "center", marginTop: '230px' }}>
              <Typography variant="h4">
                PORTFOLIO
            </Typography>
              <Typography color="textSecondary">
                Check out my latest projests.
            </Typography>
            </div>
            <GridContainer style={{ marginTop: '20px', textAlign: 'center' }}>
              <GridItem xs={12} sm={12} md={6} style={{ marginTop: '55px' }}>
                <Card>
                  <CardHeader
                    title="Landing Page"
                    subheader="May 30, 2019"
                  />
                  <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
                    image="https://juliancio.com.br/img/landing-page.PNG"
                    title="Landing Page"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Developed with HTML5 and CSS3
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="visit" target="_blank" href="https://juliancio.com.br/projects/product-landing-page/index.html">
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton aria-label="code" target="_blank" href="https://github.com/Juliancio/landing-page">
                      <CodeIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={6} style={{ marginTop: '55px' }}>
                <Card>
                  <CardHeader
                    title="Survey Form"
                    subheader="May 2, 2019"
                  />
                  <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
                    image="https://juliancio.com.br/img/survey-form.PNG"
                    title="Survey Form"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Developed with HTML5 and CSS3
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="visit" target="_blank" href="https://juliancio.com.br/projects/survey-form/index.html">
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton aria-label="code" target="_blank" href="https://github.com/Juliancio/survey-form">
                      <CodeIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={6} style={{ marginTop: '55px', marginBottom: '55px' }}>
                <Card>
                  <CardHeader
                    title="Tribute Page"
                    subheader="April 30, 2019"
                  />
                  <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
                    image="https://juliancio.com.br/img/tribute-page.PNG"
                    title="Tribute Page"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Developed with HTML5 and CSS3
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="visit" target="_blank" href="https://juliancio.com.br/projects/tribute-page/index.html">
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton aria-label="code" target="_blank" href="https://github.com/Juliancio/tribute-ayrton-senna">
                      <CodeIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </GridItem>
            </GridContainer>

            <GridContainer>
              <GridItem style={{ textAlign: "center", marginTop: '30px', marginBottom: '30px' }}>
                <Typography variant="h4">
                  CONTACT
                </Typography>
                <Typography color="textSecondary">
                  Let's talk!
                </Typography>
                <form action="https://postmail.invotes.com/send"
                  method="post" id="email_form" style={{ marginTop: '25px' }}>
                  <input required type="text" className='formSubject' name="subject" placeholder="Subject" />
                  <input required type="text" className='formSubject' name="name" placeholder="Name" />
                  <input required type="text" className='formSubject' name="extra_phone_number" placeholder="E-mail" />
                  
                  <textarea className='message' name="text" placeholder="Message"></textarea>
                  <input type="hidden" name="access_token" value="xhmevjls83xtcnxxfoqfiyqb" />
                  <input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
                  <input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />
                  
                  <input type="hidden" name="sms_format" value="true" />
                  <input id="submit_form" type="submit" value="SEND" />
                </form>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
