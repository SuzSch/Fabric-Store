import React from "react";
import PropTypes from "prop-types";

function FabricDetail(props) {
  const { fabric } = props;

  return (
    <React.Fragment>
      <h1>Fabric Details</h1>
      <h3>{fabric.description}</h3>
      <h3>{fabric.price}</h3>
      <h3>{fabric.details}</h3>
      <h3>{fabric.yardInStock}</h3>
      <h3>{fabric.image}</h3>
    </React.Fragment>
  );
}

FabricDetail.propTypes = {
  fabric: PropTypes.object
};

export default FabricDetail;