import { Button } from 'antd';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ERrorPage = () => {
    const router = useRouter();

    setTimeout(()=>{
        router.push("/")
    },7000)

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Cheap PC Not Found</title>
        <meta
          name="description"
          content="This is Cheap PC of Sarwar made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={'https://img.freepik.com/free-photo/error-word-transmission-warp-text_53876-108497.jpg?w=996&t=st=1690571071~exp=1690571671~hmac=19f994cbc8efb11cd427f1faab5ab9337795c0706a39fdf32fef2ee9a3e7e5ba'}
        width={700}
        height={500}
        layout='responsive'
        alt="error_image"
        style={{ display: "flex", margin: "50px auto" }}
      />
      <Link href="/">
        <Button>Back To Home</Button>
      </Link>
    </div>
  );
};

export default ERrorPage;