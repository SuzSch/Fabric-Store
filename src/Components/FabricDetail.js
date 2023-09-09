import React from "react";
import PropTypes from "prop-types";

function FabricDetail(props) {
  const { fabric } = props;

  return (
    <React.Fragment>
      <h1>Fabric Details</h1>
      <img src={fabric.image}/>
      <h3>{fabric.description}</h3>
      <h3>{fabric.price}</h3>
      <h3>{fabric.details}</h3>
      <h3>{fabric.yardsInStock}</h3>
    </React.Fragment>
  );
}

FabricDetail.propTypes = {
  fabric: PropTypes.object
};

export default FabricDetail;