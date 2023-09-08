import React from "react";
import Fabric from "./Fabric";

const fabricsInStock = [
  {
    description: "8OZ ORGANIC SANDED TWILL",
    price: 20.25,
    details: "This organic cotton has a fine twill with a soft sanded finish on one side.",
    yardsInStock: 39
  },
  {
    description: "FADED PLUM SLUB STRIPE INDIAN COTTON",
    price: 21.75,
    details: "A handloomed candy stripe of pale plum and natural with a loose weave and a washed out slubby texture.",
    yardsInStock: 54
  },
  {
    description: "CUMIN DRY QUILTED OILSKIN",
    price: 51.50,
    details: "A high performing quilted cloth that is water resistant, temperature regulating and easy on the environment.",
    yardsInStock: 89
  },
  {
    description: "EARTHEN CROSS STITCH INDIAN COTTON",
    price: 19.00,
    details: "A unique mid weight Indian cotton in a warm khaki brown with cross stitch detailing in pale pink and green.",
    yardsInStock: 65
  },
  {
    description: "FLURO DOBBY INDIAN COTTON",
    price: 16.25,
    details: "A delicate dobby cotton in a natural ecru with tiny orange, yellow and blue fluorescent dots woven through.",
    yardsInStock: 167
  },
  {
    description: "LOOMSTATE LINEN CANVAS",
    price: 20.25,
    details: "A medium weight natural linen. Great for soft furnishings, curtains, blinds and upholstery when using a backing as it is ever so slightly see-through.",
    yardsInStock: 73
  }

];

function FabricList() {
  return (
    <React.Fragment>
      <hr/>
      {fabricsInStock.map((fabric, index) => 
      <Fabric
      description={fabric.description}
      price={fabric.price}
      details={fabric.details}
      yardsInStock={fabric.yardsInStock}
      key={index}/>
      )}
    </React.Fragment>
  );
}
export default FabricList;