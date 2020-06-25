import React, { Fragment } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";

const About = () => {
  return (
    <Fragment>
      <Jumbotron>
        <h1>About the application</h1>
        <p>This is an image upload and cropping tool.</p>
      </Jumbotron>
    </Fragment>
  );
};

export default About;
