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
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchedText, setSearchedText]: any = useState();
  const [selectedTool, setSelectedTool]: any = useState();
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

  useEffect(() => {
    setFilteredBlogs(blogs);
  }, [blogs]);
  const onToolSelect = (id?: string) => {
    setSelectedTool(id);
    setSearchedText();
    const newBlogs = [...blogs];

    const filteredBlogs = newBlogs.filter((blog: any) => {
      return blog?.toolID === id;
    });

    setFilteredBlogs(filteredBlogs);
  };
  const onSearchTool = (value?: string) => {
    setSelectedTool();
    setSearchedText(value);
    const newBlogs = [...blogs];

    const searchedBlogs: any = newBlogs.filter((blog: any) => {
      return blog?.toolID.includes(value);
    });

    setFilteredBlogs(searchedBlogs);
  };

  return (
    <>
      <LayoutComponent>
        <HeaderComponent>
          <Navbar />
        </HeaderComponent>
        <Content>
          <Header searchedText={searchedText} onSearchTool={onSearchTool} />
          <PageContent
            tools={tools}
            selectedToolId={selectedTool}
            blogs={filteredBlogs}
            onToolSelect={onToolSelect}
          />
        </Content>
      </LayoutComponent>
    </>
  );
};
