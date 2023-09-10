import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import "./NewFabricForm.css";


function ReusableForm(props) {

  const [fabricData, setFabricData] = useState({
    description: "",
    price: "",
    details: "",
    yardsInStock: "",
    image: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFabricData({ ...fabricData, [name]: value });
  };

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setFabricData({ ...fabricData, image: event.target.result });
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const handleNewFabricFormSubmission = (event) => {
    event.preventDefault();
    props.onNewFabricCreation({
      description: fabricData.description,
      price: fabricData.price,
      details: fabricData.details,
      yardsInStock: fabricData.yardsInStock,
      image: fabricData.image,
      id: v4(),
    });

    setFabricData({
      description: "",
      details: "",
      yardsInStock: "",
      image: null,
    });
  };
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="description"
          placeholder="short description"
          style={{ textTransform: "uppercase" }}
          value={fabricData.description}
          onChange={handleInputChange} />

        <label>
          Price per yard
        </label>
        <input
          type="text"
          name="price"
          placeholder="0.00"
          value={fabricData.price}
          onChange={handleInputChange} />

        <textarea
          name="details"
          placeholder="Add details about the fabric."
          value={fabricData.details}
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="yardsInStock"
          placeholder="How many yards to add?"
          value={fabricData.yardsInStock}
          onChange={handleInputChange}
        />

        <label>
          Upload Image
        </label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;