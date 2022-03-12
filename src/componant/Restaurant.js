import { useState } from "react";
import Product from "./basic/Product";
import data from "./api/data";
const Resturent = () => {
  const [product, setProduct] = useState(data);
  const filterItem = (category) => {
    const updatedItem = data.filter((curItem) => {
      return curItem.category === category;
    });
    setProduct(updatedItem);
  };
  return (
    <>
      <nav className="flex flex-wrap gap-2 justify-center py-5">
        <button
          className="bg-yellow-900 rounded-md p-2 text-white font-bold"
          onClick={() => filterItem("breakfast")}
        >
          Breakfast
        </button>
        <button
          className="bg-yellow-900 rounded-md p-2 text-white font-bold"
          onClick={() => filterItem("dinner")}
        >
          Dinner
        </button>
        <button
          className="bg-yellow-900 rounded-md p-2 text-white font-bold"
          onClick={() => filterItem("launch")}
        >
          Launch
        </button>
        <button
          className="bg-yellow-900 rounded-md p-2 text-white font-bold"
          onClick={() => setProduct(data)}
        >
          All
        </button>
      </nav>
      <Product product={product} />
    </>
  );
};

export default Resturent;
