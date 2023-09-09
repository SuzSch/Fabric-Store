import React from "react";
import PropTypes from "prop-types";

function Fabric(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenFabricClicked(props.id)}>
      <img src={props.image} />
      <h2>{props.description}</h2>
      <h2>${props.price} per yard</h2>
      <h3>{props.details}</h3>
      <h3>Yards in stock: {props.yardsInStock}</h3>
      <hr />
      </div>
    </React.Fragment>
    
  );
}

Fabric.propTypes = {
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  yardsInStock: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  whenFabricClicked: PropTypes.func
};

export default Fabric;