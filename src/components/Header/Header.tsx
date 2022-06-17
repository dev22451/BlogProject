import React from "react";
import { Input } from "antd";
import "./header-style.css";
import styled from "styled-components";
import { HeaderBackground } from "../../assets";
const { Search } = Input;

const HeaderWrapper = styled.section`
  background-image: url(${HeaderBackground});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 450px;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  margin: auto;
  height: inherit;
`;
const HeaderText = styled.div`
  font-size: 3.4rem;
  color: white;
  font-weight: 500;
  line-height: 4.7rem;
  margin-bottom: 2.5rem;
`;
const SearchbarSection = styled.div`
  width: 95%;
`;

const onSearch = (value: string) => {};
interface HeaderProps {
  onSearchTool?: (value?: string) => void;
  searchedText?: string;
}
export const Header: React.FC<HeaderProps> = ({
  onSearchTool = () => {},
  searchedText,
}) => {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderText>
            Top product news, content marketing tips, and insights.
          </HeaderText>
          <SearchbarSection>
            <Search
              placeholder="Search Tools"
              allowClear
              enterButton="Search"
              onSearch={(value) => {
                onSearchTool(value);
                // console.log(value, "value");
              }}
              value={searchedText}
            />
          </SearchbarSection>
        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
};
