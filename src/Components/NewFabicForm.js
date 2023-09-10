import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReuseableForm";

function NewFabricForm(props) {

  return (
    <React.Fragment>
      <hr />
      <h2>ADD A NEW FABRIC TO INVENTORY</h2>
      <ReusableForm formSubmissionHandler={handleNewFabricFormSubmission}
      buttonText="Submit" />
    </React.Fragment>
  );
}

NewFabricForm.propTypes = {
  onNewFabricCreation: PropTypes.func
};

export default NewFabricForm;
