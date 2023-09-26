import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CategoryPage from "./category";
import { useSelector } from "react-redux";
import mainAPi from "@/components/mainAPi";
import { Button, message } from "antd";

const PcBuilderPage = ({ categories }) => {
  const { products, total } = useSelector((state) => state.pcBuilt);
  

  const [messageApi, contextHolder] = message.useMessage();
  const success = (message) => {
    messageApi.info(message);
  };

  const completeHandler = ()=>{
    success("SuccessFully Built Pc")
    // console.log(success);
  }

  return (
    <div>
        <h2>Total Cost: ${total}</h2>
        
        {contextHolder}
        {products?.length === 6 && (
          <div className="" onClick={()=>completeHandler()}>
            <Button
           block  >
            Complete Build
          </Button>
          </div>
        )}
      <div className="grid grid-cols-2 gap-4">
      
        {categories?.map((categoryData, index) => {
          return (
            <CategoryPage
              key={index + 1}
              categoryData={categoryData}
            ></CategoryPage>
          );
        })}
      </div>
    </div>
  );
};

export default PcBuilderPage;

export const getStaticProps = async () => {
  const res = await fetch(`${mainAPi}/category`);
  const data = await res.json();

  return {
    props: {
      categories: data?.data,
    },
    revalidate: 30,
  };
};
