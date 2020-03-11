import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";
import NASACard from "./NASACard";
import ImageCard from "./ImageCard";
import LinearProgress from "@material-ui/core/LinearProgress";
const ImageTransfer = () => {
  const [image, setImage] = useState("");
  const [content, setContent] = useState();
  const [nasaImage, setNasaImage] = useState({});
  const [contentURL, setContentURL] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=Px0vk2eU6NFKbmqviNNjQLNsdXpfss1BuKo49gS8"
      )
      .then(res => {
        console.log(res.data);
        setNasaImage(res.data);
      });
  }, []);

  const handleClick = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("content", content);
    formData.append("style", nasaImage.hdurl);
    axios
      .post(
        "https://api.deepai.org/api/neural-style",

        formData,
        {
          headers: {
            "api-key": "80c63e40-b705-4a9b-aa30-a27560cf5277",
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        console.log(res.data);
        setImage(res.data.output_url);
      })
      .catch(err => console.log("error", err));
  };
  const handleSaveImage = () => {
    let user = {};
    let imageURL = image;
    let url = "http://localhsot:5000";
    axios
      .post(url, {
        user: user,
        imageURL: imageURL
      })
      .then(res => console.log("image saved", res))
      .catch(err => console.log("save failed", err));
  };
  const handleUploadFile = e => {
    e.preventDefault();
    setContent(e.target.files[0]);
    // render the image
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function(e) {
      setContentURL(reader.result);
    };
  };
  return (
    <div className="container">
      <div className="row">
        <NASACard
          url={nasaImage.url}
          title={nasaImage.title}
          explanation={nasaImage.explanation}
          copyright={nasaImage.copyright}
        />
        <div className="image-container">
          <div>
            <ImageCard url={nasaImage.url} description={nasaImage.title} />
          </div>
          <div className="image-content">
            <ImageCard url={contentURL} />
            <Button
              variant="contained"
              color="default"
              startIcon={<CloudUploadIcon />}
            >
              <input
                type="file"
                name="filename"
                onChange={handleUploadFile}
              ></input>
            </Button>
          </div>

          <div className="image-styled">
            <div>
              <LinearProgress hidden={true} />
            </div>
            <ImageCard url={image} />
            <div className="btn-container">
              <Button
                className="save-btn"
                variant="contained"
                color="secondary"
                onClick={handleClick}
              >
                generate your image
              </Button>
              <Button
                className="save-btn"
                variant="contained"
                color="default"
                startIcon={<SaveIcon />}
                onClick={handleSaveImage}
              >
                Save My Image
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTransfer;
