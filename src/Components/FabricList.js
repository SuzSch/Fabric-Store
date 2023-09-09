import React from "react";
import Fabric from "./Fabric";
import PropTypes from "prop-types";


function FabricList(props) {
  return (

    <React.Fragment>
      {props.fabricList.map((fabric) =>
        <Fabric
          whenFabricClicked={props.onFabricSelection}
          description={fabric.description}
          price={fabric.price}
          details={fabric.details}
          yardsInStock={fabric.yardsInStock}
          image={fabric.image}
          id={fabric.id}
          key={fabric.id} />
      )}
    </React.Fragment>

  );
}

FabricList.propTypes = {
  fabricList: PropTypes.array,
  onFabricSelection: PropTypes.func
};

export default FabricList;