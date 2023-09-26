import Link from "next/link";
import React from "react";

const Navbar = ({ categoryData }) => {
  console.log(categoryData);
  return (
    <div>
      {categoryData?.map((category) => (
        <Link key={category._id} href={`/pc/${category.category}`}>
          {category.category}aa
        </Link>
      ))}
    </div>
  );
};

export default Navbar;

// export const getStaticProps = async () => {
//   const res = await fetch("http://localhost:5000/api/v1/category");
//   const data = await res.json();
//   // console.log(data, "from navbar");

//   return {
//     props: {
//       categoryData: data?.data,
//     },
//     // revalidate: 30,
//   };
// };
