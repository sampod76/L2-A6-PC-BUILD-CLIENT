import React from "react";
import { Form, Input, Button } from "antd";

import { signIn } from "next-auth/react";


const SignUpPage = () => {
  

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div
        style={{
          height: "100vh",
          fontFamily: "cursive",
        }}
      >
        <h2 className="text-3xl font-bold">SIgn Up</h2>
        <Form className="mt-8 space-y-6" onFinish={onSubmit}>
          <Form.Item label="User Name" name="name">
            <Input placeholder="You Email"  required></Input>
          </Form.Item>
          <Form.Item label="UserPassword" name="password">
            <Input placeholder="You Password"  required></Input>
          </Form.Item>

        <Form.Item>
          <Button block type="default" htmlType="submit">Sign UP</Button>
        </Form.Item>

          
        </Form>

        <section className="mt-7 flex flex-col gap-5">
          <button
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://cheap-pc-builder-sarwar-asik.vercel.app/",
              })
            }
            className="flex items-center justify-center w-full  px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.17 6.839 9.49.5.092.683-.217.683-.481 0-.237-.01-.866-.015-1.698-2.785.603-3.369-1.338-3.369-1.338-.455-1.159-1.112-1.468-1.112-1.468-.91-.621.07-.609.07-.609 1.005.07 1.532 1.033 1.532 1.033.892 1.527 2.339 1.085 2.912.829.091-.646.351-1.085.636-1.334-2.226-.253-4.565-1.113-4.565-4.949 0-1.09.389-1.984 1.033-2.682-.103-.252-.448-1.272.097-2.654 0 0 .844-.269 2.76 1.03a9.65 9.65 0 012.504-.337c.851.003 1.706.114 2.504.337 1.915-1.3 2.757-1.03 2.757-1.03.546 1.382.201 2.402.098 2.654.644.698 1.032 1.592 1.032 2.682 0 3.846-2.342 4.693-4.576 4.943.36.31.679.922.679 1.855 0 1.337-.012 2.414-.012 2.742 0 .267.18.577.688.48C17.137 18.167 20 14.417 20 10c0-5.523-4.477-10-10-10"
                clipRule="evenodd"
              />
            </svg>
            Sign in with GitHub
          </button>
          <button onClick={() =>
              signIn("google", {
                callbackUrl: "https://cheap-pc-builder-sarwar-asik.vercel.app/",
              })
            } className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9.293 3.293A1 1 0 0110 3h4a1 1 0 011 1v12a1 1 0 01-1 1h-4a1 1 0 01-.707-.293l-6-6a1 1 0 010-1.414l6-6zM6.586 10l-4 4V6l4 4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Google</span>
          </button>
        </section>
      </div>
    </div>
  );
};

export default SignUpPage;
