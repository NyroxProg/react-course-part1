import { useEffect, useState } from "react";
import ProductList from "@components/ProductList";

const connect = () => console.log("միացնող...");
const disconnect = () => console.log("անջատում...");

function ProductListApp() {
  useEffect(() => {
    connect();
    return () => disconnect();
  });
  const [productCategory, setProductCategory] = useState("");

  return (
    <>
      <h1>Ապրանքների ցանկ</h1>
      <select
        className="form-select"
        onChange={(e) => setProductCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="Clothing">Հագուստ</option>
        <option value="Household">Տնային տնտեսություն</option>
      </select>
      <ProductList category={productCategory} />
    </>
  );
}

export default ProductListApp;
