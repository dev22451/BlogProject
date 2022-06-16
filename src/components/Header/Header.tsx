import React from "react";
import { Input } from "antd";
import "./header-style.css";

const { Search } = Input;

const onSearch = (value: string) => console.log(value);
export const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="header-container">
          <div className="header-text">
            Top product news, content marketing tips, and insights.
          </div>
          <div className="searchbar-section">
            <Search
              placeholder="Search Tools"
              allowClear
              enterButton="Search"
              onSearch={onSearch}
            />
          </div>
        </div>
      </div>
    </>
  );
};
