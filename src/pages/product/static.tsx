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

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
    // revalidate: 10, // setelah 10 detik nextjs akan memperbarui data sebelumnya dengan data yang baru saat dibuild
  };
}
