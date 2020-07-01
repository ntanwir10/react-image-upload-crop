import React, { useState, Fragment } from "react";
//firebase
import firebase from "firebase";
import { storage } from "../firebase/index";

// react-bootstrap imports
import Form from "react-bootstrap/form";
import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

// self component CSS
import "../ImageUpload/ImageUpload.css";

const ImageUpload = (props) => {
  const initImgState = { imgUrl: "" };
  const [imgAsFile, setImgAsFile] = useState("");
  const [imgAsUrl, setImgAsUrl] = useState(initImgState);
  const [progress, setProgess] = useState(0);

  const handleImgAsFile = (e) => {
    console.log("triggering handle image as file");
    const image = e.target.files[0];
    setImgAsFile((imgAsFile) => image);
  };

  /*
   *next(), error() and complete() methods will passed into uploadTask.on().
   *Doing it this way, to avoid clutter inside uploadTask.on()
   */

  const next = (snapShot) => {
    // takes the snapShot of each step of the process
    console.log(snapShot);
    const progress = Math.round(
      (snapShot.bytesTransferred / snapShot.totalBytes) * 100
    );
    setProgess(progress);
  };
  // error handling
  const error = (error) => {
    //catches the errors
    console.log(error);
  };
  const complete = () => {
    // gets the functions from storage refences the image storage in firebase by the children
    // gets the download url then sets the image from firebase as the value for the imgUrl key:
    storage
      .ref("images")
      .child(imgAsFile.name)
      .getDownloadURL()
      .then((fireBaseUrl) => {
        setImgAsUrl((prevObject) => ({
          ...prevObject,
          imgUrl: fireBaseUrl,
        }));
      });
  };

  const handleCloudUpload = (e) => {
    console.log("triggering handle upload");
    e.preventDefault();
    console.log("starting to upload");
    // checkin if the file is an image
    if (imgAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imgAsFile}`);
      return <p>`not an image, the image file is a ${typeof imgAsFile}`</p>;
    }
    const uploadTask = storage.ref(`/images/${imgAsFile.name}`).put(imgAsFile);
    // initiates upload to cloudserver ie firebase
    uploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      next,
      error,
      complete
    );
  };
  return (
    <Fragment>
      <Container fluid="md">
        <Row>
          <Col>
            <Form onSubmit={handleCloudUpload}>
              <Form.Group role="form">
                <ProgressBar value={progress} now={progress} max="100" />
                <Form.File
                  id="exampleFormControlFile1"
                  onChange={handleImgAsFile}
                />
                <Button variant="outline-primary" type="submit">
                  Upload File into Firbase
                </Button>
              </Form.Group>
            </Form>
            <div>
              <Alert variant="success">
                Uploaded image url:
                <Alert.Link
                  href={imgAsUrl.imgUrl}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {" "}
                  {imgAsUrl.imgUrl}
                </Alert.Link>
              </Alert>
            </div>
            <div className="image-preview">
              <p>Upload image preview:</p>
              <Image src={imgAsUrl.imgUrl} fluid />
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ImageUpload;
