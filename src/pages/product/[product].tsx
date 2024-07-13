import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";
import DetailProduct from "@/views/DetailProduct";
import { ProductType } from "@/types/product.type";

export default function DetailProductPage({
  product,
}: {
  product: ProductType;
}) {
  const { query } = useRouter();

  // cilent side
  // const { data, error, isLoading } = useSWR(
  //   `/api/product/${query.product}`,
  //   fetcher
  // );

  // console.log(data);
  return (
    <div>
      {/* cilent side */}
      {/* <DetailProduct product={isLoading ? {} : data.data} /> */}

      {/* server side & static side*/}
      <DetailProduct product={product} />
    </div>
  );
}

// server side
// export async function getServerSideProps({
//   params,
// }: {
//   params: { product: string };
// }) {
//   // console.log(params.product);

//   const res = await fetch(
//     `http://localhost:3000/api/product/${params.product}`
//   );
//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

// static side generation
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/product");
  const response = await res.json();

  const paths = response.data.map((product: ProductType) => ({
    params: {
      product: product.id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: {
  params: { product: string };
}) {
  // console.log(params.product);

  const res = await fetch(
    `http://localhost:3000/api/product/${params.product}`
  );
  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
