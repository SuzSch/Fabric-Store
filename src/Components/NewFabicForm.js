import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import "./NewFabricForm.css";


function NewFabricForm(props) {
  return (
    <React.Fragment>
      <hr />
      <h2>ADD A NEW FABRIC TO INVENTORY</h2>
      <form onSubmit={handleNewFabricFormSubmission} className="fabric-form">

        <input
          type="text"
          name="description"
          placeholder="short description"
          style={{ textTransform: "uppercase" }} />

        <label>
          Price per yard
        </label>
        <input
          type="text"
          name="price"
          placeholder="0.00" />

        <textarea
          name="details"
          placeholder="Add details about the fabric." />

        <input
          type="text"
          name="yardsInStock"
          placeholder="How many yards to add?" />

        <label>
          Upload Image
        </label>
        <input
          type="file"
          name="image"
          accept="image/*"
        />

        <button type="submit">Add Fabric</button>
      </form>
    </React.Fragment>
  );

  function handleNewFabricFormSubmission(event) {
    event.preventDefault();
    props.onNewFabricCreation({
      description: event.target.description.value,
      price: parseFloat(event.target.price.value),
      details: event.target.details.value,
      yardsInStock: parseFloat(event.target.yardsInStock.value),
      image: event.target.image.value,
      id: v4()
    });
  }
}

NewFabricForm.propTypes = {
  onNewFabricCreation: PropTypes.func
};

export default NewFabricForm;
