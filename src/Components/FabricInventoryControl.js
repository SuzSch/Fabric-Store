import React from "react";
import NewFabricForm from "./NewFabicForm";
import FabricList from "./FabricList";

class FabricInventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisableOnPage: false
    };
  }

  render() {
    let currentlyVisibleState = null;
    let addFabricButton = null;
    if (this.state.formVisableOnPage) {
      currentlyVisibleState = <NewFabricForm />
    } else {
      currentlyVisibleState = <FabricList />
      addFabricButton= <button onClick={this.handleClick}>Add a new Fabric</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addFabricButton}
      </React.Fragment>
    );
  }

}

export default FabricInventoryControl;