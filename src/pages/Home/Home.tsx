import { Layout } from "antd";
import { Content, Header as Head } from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { Navbar, Header, PageContent } from "../../components";
import styled from "styled-components";
import axios from "axios";

const LayoutComponent = styled(Layout)`
  background: white !important;
`;
const HeaderComponent = styled(Head)`
  background: white !important;
`;

export const Home = () => {
  const [tools, setTools] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const getTools = () => {
    axios
      .get("https://craftly.free.beeceptor.com/tools")
      .then((response) => {
        setTools(response?.data?.tools);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  const getBlogs = () => {
    axios
      .get("https://craftly.proxy.beeceptor.com/blogs")
      .then((response) => {
        setBlogs(response?.data?.blogs);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  useEffect(() => {
    getTools();
    getBlogs();
  }, []);

  return (
    <>
      <LayoutComponent>
        <HeaderComponent>
          <Navbar />
        </HeaderComponent>
        <Content>
          <Header />
          <PageContent tools={tools} blogs={blogs} />
        </Content>
      </LayoutComponent>
    </>
  );
};
