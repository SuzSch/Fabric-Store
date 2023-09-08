import React from "react";
import Fabric from "./Fabric";

const fabricsInStock = [
  {
    description:
    price:
    details:
    yardsInStock:
  },
  {
    description:
      price:
    details:
      yardsInStock:
  },
  {
    description:
      price:
    details:
      yardsInStock:
  },
  {
    description:
      price:
    details:
      yardsInStock:
  },
  {
    description:
      price:
    details:
      yardsInStock:
  },
  {
    description:
      price:
    details:
      yardsInStock:
  }

];

function FabricList() {
  return (
    <Fabric
      description="8oz Organic Sanded Twill"
      price="$20.25 /yd"
      details="This organic cotton has a fine twill with a soft sanded finish on one side."
      yardsInStock= "30"
    />
  );
}
export default FabricList;