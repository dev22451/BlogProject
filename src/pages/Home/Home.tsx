import { Layout } from "antd";
import { Content, Header as Head } from "antd/lib/layout/layout";
import React from "react";
import { Navbar, Header, PageContent } from "../../components";
import styled from "styled-components";

const LayoutComponent = styled(Layout)`
  background: white !important;
`;
const HeaderComponent = styled(Head)`
  background: white !important;
`;

export const Home = () => {
  return (
    <>
      <LayoutComponent>
        <HeaderComponent>
          <Navbar />
        </HeaderComponent>
        <Content>
          <Header />
          <PageContent />
        </Content>
      </LayoutComponent>
    </>
  );
};
