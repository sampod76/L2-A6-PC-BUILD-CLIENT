import React from "react";
import ProductPage from "./products";
import Banner from "@/components/Banner";
import HomeCategory from "@/components/HomeCategory";

const HomePage = ({allProducts,categories}) => {
  return <div>
    <Banner></Banner>
    <HomeCategory categories={categories}></HomeCategory>
    <ProductPage allProducts={allProducts}></ProductPage>
  </div>;
};

export default HomePage;




export const getStaticProps = async () => {
  const res = await fetch("https://pc-builder-server-indol.vercel.app/api/v1/pc");
  const data = await res.json();
  const categoryResponse = await fetch("https://pc-builder-server-indol.vercel.app/api/v1/category");
  const categories = await categoryResponse.json();
  return {
    props: {
      allProducts: data?.data,
      categories:categories?.data
    },
    // revalidate: 30,
  };
};
