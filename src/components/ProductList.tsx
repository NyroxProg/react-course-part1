import React, { useEffect, useState } from "react";

function ProductList({ category }: { category: string }) {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log(`Fetching products in ${category}`);

    setProducts(["Clothing", "Soap"]);
  }, [category]);
  return (
    <ul>
      {products.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
}

export default ProductList;
