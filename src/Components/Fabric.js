import React from "react";

function Fabric() {
  const description = "8oz Organic Sanded Twill"
  const price = "$20.25 /yd"
  const details = "This organic cotton has a fine twill with a soft sanded finish on one side."
  return (
    <React.Fragment>
      <h2>{description}</h2>
      <h2>{price}</h2>
      <h3>{details}</h3>
      <hr />
    </React.Fragment>
  );
}

export default Fabric;