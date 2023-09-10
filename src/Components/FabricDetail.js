import React from "react";
import PropTypes from "prop-types";

function FabricDetail(props) {
  const { fabric, onSellYard } = props;

  const handleSellYard = () => {
    if (fabric.yardsInStock > 0) {
      onSellYard();
    }
  }

  return (
    <React.Fragment>
      <h1>Fabric Details</h1>
      <img src={fabric.image} />
      <h3>{fabric.description}</h3>
      <h3>{fabric.price}</h3>
      <h3>{fabric.details}</h3>
      <h3>{fabric.yardsInStock}</h3>
      <button onClick={handleSellYard}>Sell 1 yard of fabric</button>
      <button onClick={props.onClickingEdit}>Update Fabric Details</button>
    </React.Fragment>
  );
}

FabricDetail.propTypes = {
  fabric: PropTypes.object,
  onClickingEdit: PropTypes.func
};

export default FabricDetail;