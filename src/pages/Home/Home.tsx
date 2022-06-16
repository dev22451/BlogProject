import { Layout } from "antd";
import { Content, Header as Head } from "antd/lib/layout/layout";
import React from "react";
import { Navbar, Header } from "../../components";
import "./Home-style.css";

export const Home = () => {
  return (
    <>
      <Layout>
        <Head>
          <Navbar />
        </Head>
        <Content>
          <Header />
        </Content>
      </Layout>
    </>
  );
};
