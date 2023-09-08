import React from "react";
import Fabric from "./Fabric";
import fabricImage1 from "./../img/CROSS-STITCH.webp";
import fabricImage2 from  "./../img/FLURO-DOBBY.webp";
import fabricImage3 from "./../img/LOOMSTATE-LINEN.webp";
import fabricImage4 from "./../img/OILSKIN-CUMIN.webp";
import fabricImage5 from "./../img/PLUM-SLUB.webp";
import fabricImage6 from  "./../img/SANDED-TWILL.webp";

const fabricsInStock = [
  {
    description: "8OZ ORGANIC SANDED TWILL",
    price: 20.25,
    details: "This organic cotton has a fine twill with a soft sanded finish on one side.",
    yardsInStock: 39,
    image: fabricImage6

  },
  {
    description: "FADED PLUM SLUB STRIPE INDIAN COTTON",
    price: 21.75,
    details: "A handloomed candy stripe of pale plum and natural with a loose weave and a washed out slubby texture.",
    yardsInStock: 54,
    image: fabricImage5

  },
  {
    description: "CUMIN DRY QUILTED OILSKIN",
    price: 51.50,
    details: "A high performing quilted cloth that is water resistant, temperature regulating and easy on the environment.",
    yardsInStock: 89,
    image: fabricImage4

  },
  {
    description: "EARTHEN CROSS STITCH INDIAN COTTON",
    price: 19.00,
    details: "A unique mid weight Indian cotton in a warm khaki brown with cross stitch detailing in pale pink and green.",
    yardsInStock: 65,
    image: fabricImage1

  },
  {
    description: "FLURO DOBBY INDIAN COTTON",
    price: 16.25,
    details: "A delicate dobby cotton in a natural ecru with tiny orange, yellow and blue fluorescent dots woven through.",
    yardsInStock: 167,
    image: fabricImage2

  },
  {
    description: "LOOMSTATE LINEN CANVAS",
    price: 20.25,
    details: "A medium weight natural linen. Great for soft furnishings, curtains, blinds and upholstery when using a backing as it is ever so slightly see-through.",
    yardsInStock: 73,
    image: fabricImage3

  }

];

function FabricList() {
  return (
    <React.Fragment>
      <hr />
      {fabricsInStock.map((fabric, index) =>
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
export default FabricList;