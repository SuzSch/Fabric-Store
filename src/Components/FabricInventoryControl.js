import React from "react";
import NewFabricForm from "./NewFabicForm";
import FabricList from "./FabricList";

class FabricInventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisableOnPage: false
      fabricsInStock: []
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      formVisableOnPage: !prevState.formVisableOnPage
    }));
  }

  onNewFabricAddition = () => {

  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisableOnPage) {
      currentlyVisibleState = <NewFabricForm />;
      buttonText = "Back to Fabric Inventory"
    } else {
      currentlyVisibleState = <FabricList />
      buttonText = "Add a New Fabric"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default FabricInventoryControl;