import React from "react";

function NewFabricForm() {
  return (
    <React.Fragment>
      <form onSubmit={handleNewFabricFormSubmission}>

        <input
          type="text"
          name="description"
          placeholder="short description" />

        <input
          type="text"
          name="price"
          placeholder="price per yard" />

        <textarea
          name="details"
          placeholder="Add details about the fabric." />

        <input
          type="text"
          name="yards"
          placeholder="How many yards to add?" />

          <input
          type="file"
          name="image"                  
          />
          <button type="submit">Add Fabric</button>
      </form>
    </React.Fragment>
  );

  function handleNewFabricFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.description.value)
  }

}
export default NewFabricForm;
