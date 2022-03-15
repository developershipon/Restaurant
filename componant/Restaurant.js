import { useState } from "react";
import Product from "./basic/Product";
import data from "./api/data";
import Navbar from "./navbar/Navbar";
const Resturent = () => {
  const [product, setProduct] = useState(data);
  const uniqueList = [
    "All",
    ...new Set(
      data.map((currEl) => {
        return currEl.category;
      })
    ),
  ];
  const [nav, setNav] = useState(uniqueList);
  const filterItem = (category) => {
    if (category === "All") {
      return setProduct(data);
    }
    const updatedItem = data.filter((curItem) => {
      return curItem.category === category;
    });
    setProduct(updatedItem);
  };
  return (
    <>
      <Navbar filterItem={filterItem} nav={nav} />
      <Product product={product} />
    </>
  );
};

export default Resturent;
