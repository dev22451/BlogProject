import React from "react";
import { BreadCrumb } from "../Breadcrumb/Breadcrumb";
import { ToolcardData } from "../../constants/toolcardData";
// import "./page-content-style.css";
import { ToolCard } from "../ToolCard/ToolCard";
import styled from "styled-components";
import { BlogCard } from "../BlogCard/BlogCard";
import { BlogCardImage } from "../../assets";

const PageContentWrapper = styled.section`
  background: white;
`;
const PageContentContainer = styled.div``;

const BreadcrumbWrapper = styled.div`
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
`;
const BreadcrumbContainer = styled.div`
  width: 83.5%;
`;

const ToolSelectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;
  box-shadow: 0px 23.4967px 36.7135px -23.4967px rgba(95, 103, 117, 0.25);
`;

const ToolSelectionContainer = styled.div`
  width: 83.5%;
`;
const Title = styled.h2`
  color: #2b2a35;
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
`;

const ToolCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 0;
  flex-wrap: wrap;
`;

const BlogCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const BlogCardsContainer = styled.div`
  width: 83.5%;
  display: flex;
  justify-content: space-between;
`;

export const PageContent = () => {
  return (
    <>
      <PageContentWrapper>
        <PageContentContainer>
          <BreadcrumbWrapper>
            <BreadcrumbContainer>
              <BreadCrumb />
            </BreadcrumbContainer>
          </BreadcrumbWrapper>
          <ToolSelectionWrapper>
            <ToolSelectionContainer>
              <Title>Browse by Tools</Title>
              <ToolCardWrapper>
                {ToolcardData.map((card) => {
                  return <ToolCard icon={card?.icon} title={card?.title} />;
                })}
              </ToolCardWrapper>
            </ToolSelectionContainer>
          </ToolSelectionWrapper>
          <BlogCardsWrapper>
            <BlogCardsContainer>
              <BlogCard
                image={BlogCardImage}
                tag="Content Improver"
                title="Introducing the AI-powered Content Improver"
                author="Jermy"
                time="May 11, 2022"
              />
              <BlogCard
                image={BlogCardImage}
                tag="Content Improver"
                title="Introducing the AI-powered Content Improver"
                author="Jermy"
                time="May 11, 2022"
              />
              <BlogCard
                image={BlogCardImage}
                tag="Content Improver"
                title="Introducing the AI-powered Content Improver"
                author="Jermy"
                time="May 11, 2022"
              />
            </BlogCardsContainer>
          </BlogCardsWrapper>
        </PageContentContainer>
      </PageContentWrapper>
    </>
  );
};
