import { Card, Col, Row } from "antd";

import Image from "next/image";
import Link from "next/link";

const { Meta } = Card;

const ProductPage = ({ allPcProducts }) => {
  console.log(allPcProducts)
  
  return (
    <div className="mt-7 text-center">
      <h2 className="text-[2.1rem] font-extrabold my-2">All Products</h2>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allPcProducts?.map((product) => {
          const {
            image,
            productName,
            category,
            status,
            price,
            description,
            mainRating,
            // mainFeatures: { brand, model, specification, Port, Voltage },
          } = product;

          return (
            <Col xs={24} sm={12} md={8} key={product?.id} style={{ marginInline: "auto" }}>
              <Link href={`/products/${product?._id}`}>

              <Card
                // style={{ width: 300 }}
                cover={
                  <Image
                    src={image}
                    height={200}
                    width={200}
                    alt="card"
                    // layout="responsive"
                    style={{height:"300px"}}
                  />
                }
              >
                <Meta
                  title={productName}
                  description={description}
                />
                <section
                  style={{ fontFamily: "fantasy", marginInline: "10px" }}
                >
                  <h3>Category : {category}</h3>
                  <h3>Price :{price}</h3>
                  <h3>Status :{status}</h3>
                  <h3>Rating :{mainRating}</h3>
                </section>
              </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProductPage;
