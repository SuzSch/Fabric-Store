import React from "react";
import NewFabricForm from "./NewFabicForm";
import FabricList from "./FabricList";

class FabricInventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisableOnPage: false,
      fabricsInStock: []
    };
  }
  handleClick = () => {
    this.setState(prevState => ({
      formVisableOnPage: !prevState.formVisableOnPage
    }));
  }

  handleAddingNewFabricToList = (newFabric) => {
    const newFabricsInStock = this.state.fabricsInStock.concat(newFabric);
    this.setState({ fabricsInStock: newFabricsInStock, formVisableOnPage: false });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisableOnPage) {
      currentlyVisibleState = <NewFabricForm onNewFabricCreation={this.handleAddingNewFabricToList}/>;
      buttonText = "Back to Fabric Inventory"
    } else {
      currentlyVisibleState = <FabricList fabricList={this.state.fabricsInStock} />
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