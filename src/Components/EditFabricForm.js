import React from "react";
import PropTypes from "prop-types";
import NewFabricForm from "./NewFabicForm";

function EditFabricForm(props) {
  const { fabric } = props;

  return (
    <React.Fragment>
      <h2>Edit Fabric</h2>
      <NewFabricForm
        onEditFabric={props.onEditFabric} 
        buttonText="Save Changes"
        initialData={fabric || {}}
      />
    </React.Fragment>
  );
}

EditFabricForm.propTypes = {
  fabric: PropTypes.object,
  onEditFabric: PropTypes.func.isRequired
};

export default EditFabricForm;
