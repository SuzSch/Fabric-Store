import React from "react";
import NewFabricForm from "./NewFabicForm";
import FabricList from "./FabricList";
import FabricDetail from "./FabricDetail";
import EditFabricForm from "./EditFabricForm";

class FabricInventoryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisableOnPage: false,
      fabricsInStock: [],
      selectedFabric: null,
      editing: false
    };
  }
  handleClick = () => {
    if (this.state.selectedFabric != null) {
      this.setState({
        formVisableOnPage: false,
        selectedFabric: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisableOnPage: !prevState.formVisableOnPage,
      }));
    }
  }

  handleAddingNewFabricToList = (newFabric) => {
    newFabric.yardsInStock = parseInt(newFabric.yardsInStock);
    const newFabricsInStock = this.state.fabricsInStock.concat(newFabric);
    this.setState({ fabricsInStock: newFabricsInStock, formVisableOnPage: false });
  }

  handleChangingSelectedFabric = (id) => {
    const selectedFabric = this.state.fabricsInStock.filter(fabric => fabric.id === id)[0];
    this.setState({ selectedFabric: selectedFabric });
  }

  handleSellYard = () => {
    if (this.state.selectedFabric != null && this.state.selectedFabric.yardsInStock > 0) {
      const updatedFabrics = this.state.fabricsInStock.map((fabric) => {
        if (fabric.id === this.state.selectedFabric.id) {
          return { ...fabric, yardsInStock: fabric.yardsInStock - 1 };
        }
        return fabric;
      });

      this.setState({
        fabricsInStock: updatedFabrics,
        selectedFabric: {
          ...this.state.selectedFabric,
          yardsInStock: this.state.selectedFabric.yardsInStock - 1,
        },
      });
    }
  }
  handleEditClick = () => {

    this.setState({ editing: true });
  }

  handleEditingFabricInList = (fabricToEdit) => {
    const editedFabricsInStock = this.state.fabricsInStock
    .filter(fabric => fabric.id !== this.state.selectedFabric.id)
    .concat(fabricToEdit);
    this.setState({
      fabricsInStock: editedFabricsInStock,
      editing: false,
      selectedFabric: null
    });
  }

  render() {

    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditFabricForm fabric={this.state.selectedFabric} onEditFabric ={this.handleEditingFabricInList}/>
      buttonText = "Back to Fabric Inventory"
    } else if (this.state.selectedFabric != null) {
      currentlyVisibleState = (
        <FabricDetail
          fabric={this.state.selectedFabric}
          onSellYard={this.handleSellYard}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Back to Fabric Inventory";
    } else if (this.state.formVisableOnPage) {
      currentlyVisibleState = (
        <NewFabricForm onNewFabricCreation={this.handleAddingNewFabricToList}
          onEditFabric={this.handleEditingFabric}
          buttonText={this.state.editing ? "Edit Fabric" : "Add Fabric"} 
          initialData={this.state.selectedFabric} />
      );
      buttonText = "Back to Fabric Inventory";
    } else {
      currentlyVisibleState = (
        <FabricList
          fabricList={this.state.fabricsInStock}
          onFabricSelection={this.handleChangingSelectedFabric}
        />
      );
      buttonText = "Add a New Fabric";
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