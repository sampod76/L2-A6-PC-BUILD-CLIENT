import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const Banner = () => {
  const onChange = (currentBanarSlide) => {
    console.log(currentBanarSlide);
  };

  return (
    // <Carousel afterChange={onChange}>
    <section className="flex justify-between items-center">
<div>
        <Image
          height={300}
          width={400}
          style={{minWidth:"100%",height:"400px"}}
          alt="banner"
          src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
      </div>
      <div>
        <Image
          height={300}
          width={400}
          style={{minWidth:"100%",height:"400px"}}
          alt="banner"
          src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
      </div>
      <div>
        <Image
          height={300}
          width={400}
          style={{minWidth:"100%",height:"400px"}}
          alt="banner"
          src="https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
      </div>
      <div>
        <Image
          height={300}
          width={400}
          style={{minWidth:"100%",height:"400px"}}
          alt="banner"
          src="https://images.pexels.com/photos/2265488/pexels-photo-2265488.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
      </div>
    </section>
      
    // </Carousel>
  );
};
export default Banner;
