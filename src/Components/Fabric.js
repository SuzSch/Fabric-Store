import React from "react";
import PropTypes from "prop-types";

function Fabric(props) {
  return (
    <React.Fragment>
      <img src={props.image} />
      <h2>{props.description}</h2>
      <h2>${props.price} per yard</h2>
      <h3>{props.details}</h3>
      <h3>Yards in stock: {props.yardsInStock}</h3>
      <hr />
    </React.Fragment>
  );
}

Fabric.propTypes = {
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  details: PropTypes.string.isRequired,
  yardsInStock: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired
}

export default Fabric;