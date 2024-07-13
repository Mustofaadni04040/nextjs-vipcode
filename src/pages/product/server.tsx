import ProductView from "@/views/Product";
import React from "react";
import { ProductType } from "@/types/product.type";

export default function ProductPage({ products }: { products: ProductType[] }) {
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
}

// dipanggil setiap melakukan request (setiap halaman dibuka)
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
