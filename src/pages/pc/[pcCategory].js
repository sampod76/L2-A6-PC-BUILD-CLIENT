import { Card, Col, Row } from "antd";

import Image from "next/image";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { addToPcBuilt } from "@/redux/fetures/pcBuildSlice";

const { Meta } = Card;

const PcDetails = ({ products }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { data: session } = useSession();
  if (products?.length < 1) {
    return <h2>Loading .......</h2>;
  }
  const [messageApi, contextHolder] = message.useMessage();
  const info = (message) => {
    messageApi.info(message);
  };
  const HandleAddProduct = (data) => {
    console.log(data);
    dispatch(addToPcBuilt(data));
    router.push("/pc");
    info("successfully added");
  };

  return (
    <div>
      <h2 className="text-[1.9rem] text-center font-extrabold mt-7 mb-3">
        Pc Details :{" "}
      </h2>
      {contextHolder}

      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {products?.map((product) => {
          const {
            image,
            productName,
            category,
            status,
            price,
            description,
            mainRating,
          } = product;
          return (
            <Col xs={24} sm={12} md={8} key={product?.id} style={{ marginInline: "auto" ,}}>
            <Card
              cover={
                <Image
                  style={{ width: "100%", height: "300px", objectFit: "cover",}}
                  width={300}
                  height={300}
                  src={image}
                  alt="card"

                  // layout="responsive"
                />
              }
             
            >
              <Meta
                title={productName}
                description={description}
              />
              <section >
                <h3>Category: {category}</h3>
                <h3>Price: {price}</h3>
                <h3>Status: {status}</h3>
                <h3>Rating: {mainRating}</h3>
              </section>
          
              {session?.user && (
                <button
                  className="bg-slate-600 p-2 text-white rounded-sm my-2"
                  onClick={() => HandleAddProduct(product)}
                >
                  Add To Builder
                </button>
              )}
            </Card>
          </Col>
          
          );
        })}
      </Row>
    </div>
  );
};

export default PcDetails;

export const getStaticPaths = async () => {
  const url = `${process.env.NEXT_SERVERSIDE_API_URL}/pc`;
  const res = await fetch(url);
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { pcCategory: product?.category }, // Use pc_Id instead of pcCategory
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `${process.env.NEXT_SERVERSIDE_API_URL}/pc/category?category=${params?.pcCategory}`
  );
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
  };
};
