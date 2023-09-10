import React from "react";
import PropTypes from "prop-types";
import NewFabricForm from "./NewFabicForm";

function EditFabricForm (props) {
  return (
    <React.Fragment>
      <h2>Edit Fabric</h2>
      <NewFabricForm
        onNewFabricCreation={handleEditingFabricInList}
        initialData={props.fabric}
        buttonText="Save Changes"
        />
    </React.Fragment>
  );
}

EditFabricForm.proTypes = {
  fabric: PropTypes.object.isRequired,
  onEditFabric: PropTypes.func.isRequired,
}

export default EditFabricForm;