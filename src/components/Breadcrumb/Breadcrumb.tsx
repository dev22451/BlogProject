import { Breadcrumb } from "antd";
import React from "react";
import styled from "styled-components";
import "./breadcrumb-style.css";

export const BreadCrumb = () => {
  return (
    <>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item className="breadcrumb-path">Blogs</Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
};
