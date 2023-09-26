import React from "react";
import ProductPage from "./products";
import Banner from "@/components/Banner";
import HomeCategory from "@/components/HomeCategory";

const HomePage = ({allPcProducts,categories}) => {
  console.log(allPcProducts,categories)

  return <div>
    <Banner></Banner>
    <HomeCategory categories={categories}></HomeCategory>
    <ProductPage allPcProducts={allPcProducts}></ProductPage>
  </div>;
};

export default HomePage;


export const getStaticProps = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_SERVERSIDE_API_URL}/pc`);
    const data = await res.json();
    if (!data.success) {
      throw new Error(`Fetch failed for PC API: ${res.status} ${res.statusText}`);
    }
    const categoryResponse = await fetch(`${process.env.NEXT_SERVERSIDE_API_URL}/category`);
    const categories = await categoryResponse.json();
    if (!categories.success) {
      throw new Error(`Fetch failed for category API: ${categoryResponse.status} ${categoryResponse.statusText}`);
    }
    return {
      props: {
        allPcProducts: data?.data,
        categories: categories?.data
      },
      // revalidate: 30,
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      props: {
        allPcProducts: null,
        categories: null
      },
    };
  }
};

