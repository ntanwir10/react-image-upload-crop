import React, { Fragment } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";

const About = () => {
  return (
    <Fragment>
      <Jumbotron>
        <h5>About the application</h5>
        <p>This is an image upload and cropping tool.</p>
      </Jumbotron>
      <Jumbotron>
        <h5> Things done: </h5>
        <ul>
          <li>A webpage where the user can upload an image </li>
          <li>A progress bar to show the progress of the process </li>

          <li>Image Preview of the uploaded image</li>
          <li>
            Instead of saving these files to the server, upload them to Firebase
          </li>
          <li>Displaying URL of uploaded image</li>
        </ul>
      </Jumbotron>
    </Fragment>
  );
};

export default About;
