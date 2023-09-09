import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewFabricForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleNewFabricFormSubmission}>

        <input
          type="text"
          name="description"
          placeholder="short description"
          style={{ textTransform: "uppercase" }} />

        <input
          type="text"
          name="price"
          placeholder="price per yard" />

        <textarea
          name="details"
          placeholder="Add details about the fabric." />

        <input
          type="text"
          name="yardsInStock"
          placeholder="How many yards to add?" />

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
