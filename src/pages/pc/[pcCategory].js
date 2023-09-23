import { Card, Col, Row } from "antd";

import Image from "next/image";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { addToPcBuilt } from "@/redux/fetures/builtPcSlice";

const { Meta } = Card;

const PcDetails = ({ products }) => {
  const dispatch = useDispatch();

  const router = useRouter();

  // ! user ///
  const { data: session } = useSession();

  if (products?.length < 1) {
    return <h2>Loading .......</h2>;
  }

  // ! Ant id Toast
  const [messageApi, contextHolder] = message.useMessage();
  const info = (message) => {
    messageApi.info(message);
  };

  // ! for addPc

  const HandleAddProduct = (data) => {
    console.log(data);
    dispatch(addToPcBuilt(data));

    router.push("/pc");
    info("successfully added");
  };

  return (
    <div>
      <h2 className="text-[1.8rem] text-center font-extrabold mt-7 mb-3">
        Pc Details :::{" "}
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
            individualRating,
            // keyFeatures: { Brand, Model, Specification, Port, Voltage },
          } = product;
          return (
            <Col key={product?.id} style={{ marginInline: "auto" }}>
              <Card
                style={{ width: 300 }}
                cover={
                  <Image
                    src={image}
                    height={200}
                    width={200}
                    alt="card"
                    // layout="responsive"
                  />
                }
              >
                <Meta
                  //   avatar={
                  //     <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  //   }
                  title={productName}
                  description={description}
                />
                <section
                  style={{ fontFamily: "fantasy", marginInline: "10px" }}
                >
                  <h3>Category :: {category}</h3>
                  <h3>Price :: {price}</h3>
                  <h3>Status :: {status}</h3>
                  <h3>Rating :: {individualRating}</h3>
                </section>

                {session?.user && (
                  <button
                    className="bg-slate-700 p-2 text-white rounded-sm my-2"
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
  const url = `https://pc-builder-server-indol.vercel.app/api/v1/pc/`;

  const res = await fetch(url);
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { pcCategory: product?.category }, // Use pcId instead of pcCategory
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://pc-builder-server-indol.vercel.app/api/v1/pc/category?category=${params?.pcCategory}`
  );
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
  };
};
