import React from "react";
import NewFabricForm from "./NewFabicForm";
import FabricList from "./FabricList";

class FabricInventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisableOnPage: false,
      fabricsInStock: [],
      selectedFabric: null
    };
  }
  handleClick = () => {
    if (this.state.selectedFabric != null) {
      this.setState({
        formVisableOnPage: false,
        selectedFabric:null
      });
    } else {
      this.setState(prevState => ({
        formVisableOnPage: !prevState.formVisableOnPage,
      }));
    }
  }

  handleAddingNewFabricToList = (newFabric) => {
    const newFabricsInStock = this.state.fabricsInStock.concat(newFabric);
    this.setState({ fabricsInStock: newFabricsInStock, formVisableOnPage: false });
  }

  handleChangingSelectedFabric = (id) => {
    const selectedFabric = this.state.fabricsInStock.filter(fabric => fabric.id)[0];
    this.setState({ selectedFabric: selectedFabric });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedFabric != null) {
      currentlyVisibleState = <FabricDetail fabric={this.state.selectedFabric} />
      buttonText = "Back to Fabric Inventory"
    } else if (this.state.formVisableOnPage) {
      currentlyVisibleState = <NewFabricForm onNewFabricCreation={this.handleAddingNewFabricToList} />;
      buttonText = "Back to Fabric Inventory";
    } else {
      currentlyVisibleState = <FabricList fabricList={this.state.fabricsInStock} onFabricSelection={this.handleChangingSelectedFabric} />;
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