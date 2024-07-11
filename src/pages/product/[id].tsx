import React from "react";
import { useRouter } from "next/router";

export default function DetailProductPage() {
  const { query } = useRouter();

  return (
    <div>
      <h1>Detail Product</h1>
      <p>Product : {query.id}</p>
    </div>
  );
}
