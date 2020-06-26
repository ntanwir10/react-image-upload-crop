import React, { Fragment } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";

const About = () => {
  return (
    <Fragment>
      <Jumbotron>
        <h1>About the application</h1>
        <p>This is an image upload and cropping tool.</p>

        <p> Things to be done: </p>
        <ul>
          <li>A webpage where the user can upload an image </li>
          <li>Each image has to be exactly 1024 x 1024. </li>
          <li>Don’t upload the file if it’s not the right size</li>
          <li>
            Each image has to be converted into four different sizes.
            <li>
              horizontal : 755 x 450 vertical : 365 x 450 horizontal small : 365
              x 212 gallery : 380 x 380 Images should not be stretched, they
              should be cropped.
            </li>
          </li>
          <li> Save all four of these images locally on the server </li>
          <li> Show a webpage with all four of these new images. </li>
          <li>
            Bonus: Instead of saving these files to the server, upload them to a
            cloud image hosting service.
          </li>
          <li>
            Double Bonus: While uploading the image show a preview in the
            browser itself of all the different image sizes, and let the user
            decide how to crop the images to the smaller size.
          </li>
        </ul>
      </Jumbotron>
    </Fragment>
  );
};

export default About;
