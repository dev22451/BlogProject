import { Layout } from "antd";
import { Content, Header } from "antd/lib/layout/layout";
import React from "react";
import { Navbar } from "../../components";
import "./Home-style.css";

export const Home = () => {
  return (
    <>
      <Layout>
        <Header>
          <Navbar />
        </Header>
        <Content></Content>
      </Layout>
    </>
  );
};
