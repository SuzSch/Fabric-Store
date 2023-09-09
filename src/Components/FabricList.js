import React from "react";
import Fabric from "./Fabric";
import PropTypes from "prop-types";


function FabricList(props) {
  return (
    
    <React.Fragment>
      {props.fabricList.map((fabric, index) =>
        <Fabric
          description={fabric.description}
          price={fabric.price}
          details={fabric.details}
          yardsInStock={fabric.yardsInStock}
          image={fabric.image}
          key={index} />
      )}
    </React.Fragment>
 
  );
}

FabricList.propTypes = {
  fabricList: PropTypes.array
};

export default FabricList;