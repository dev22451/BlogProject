import React from "react";
import styled from "styled-components";
// import "./ToolCard-style.css";
interface ToolcardProps {
  icon?: string;
  title?: string;
}

const ToolCardWrapper = styled.div`
  width: 18%;
  background: white;
  border-radius: 15px;
  height: 228px;
  padding: 30px;
  border: 1.5px solid #eeeeee;

  &:nth-child(1) {
    background-color: #8878f9;

    h4 {
      color: white;
    }
  }
`;

const ToolCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 100%;
`;

const ToolCardImage = styled.img`
  width: 60px;
  height: 60px;
`;
const ToolCardTitle = styled.h4`
  font-size: 26px;
  font-weight: 500;
  margin: 0;
  text-align: left;
  &:nth-child(1) {
    color: white;
  }
`;
export const ToolCard: React.FC<ToolcardProps> = ({ icon, title }) => {
  return (
    <>
      <ToolCardWrapper>
        <ToolCardContainer>
          <ToolCardImage src={icon} alt={title} />
          <ToolCardTitle>{title}</ToolCardTitle>
        </ToolCardContainer>
      </ToolCardWrapper>
    </>
  );
};
