import React, { useState } from "react";
import styled from "styled-components";
// import "./ToolCard-style.css";
interface ToolcardProps {
  icon?: string;
  title?: string;
  id?: string;
  onToolSelect?: (id?: string) => void;
  selectedToolId?: string;
}
interface ToolCardWrapperProps {
  id?: any;
  selectedToolId?: any;
}
const ToolCardWrapper = styled.div<ToolCardWrapperProps>`
    width: 18%;
    background: ${(props) =>
      props?.id === props?.selectedToolId ? "#8878f9" : "white"};
    border-radius: 15px;
    height: 228px;
    padding: 30px;
    border: 1.5px solid #eeeeee;
    margin-bottom: 1rem;
    
    }
  `;
const ToolCardTitle = styled.h4<ToolCardWrapperProps>`
  font-size: 26px;
  font-weight: 500;
  margin: 0;
  text-align: left;
  width: 100%;
  word-wrap: break-word;
  color: ${(props) =>
    props?.id === props?.selectedToolId ? "white" : "black"};
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

export const ToolCard: React.FC<ToolcardProps> = ({
  icon,
  title,
  onToolSelect = () => {},
  selectedToolId,
  id,
}) => {
  return (
    <>
      <ToolCardWrapper
        id={id}
        selectedToolId={selectedToolId}
        key={id}
        onClick={() => {
          onToolSelect(id);
        }}
      >
        <ToolCardContainer>
          <ToolCardImage src={icon} alt={title} />
          <ToolCardTitle id={id} selectedToolId={selectedToolId}>
            {title}
          </ToolCardTitle>
        </ToolCardContainer>
      </ToolCardWrapper>
    </>
  );
};
