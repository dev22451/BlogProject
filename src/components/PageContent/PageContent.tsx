import React from "react";
import { BreadCrumb } from "../Breadcrumb/Breadcrumb";
import { Improver } from "../../assets";
import { ToolCard } from "../ToolCard/ToolCard";
import styled, { AnyStyledComponent } from "styled-components";
import { BlogCard } from "../BlogCard/BlogCard";
import { BlogCardImage } from "../../assets";
import { Months } from "../../constants/Months";
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

interface PageContentProps {
  tools?: any;
  blogs?: any;
  onToolSelect?: (id?: string) => void;
  selectedToolId?: string;
}
export const PageContent: React.FC<PageContentProps> = ({
  tools,
  blogs,
  onToolSelect = () => {},
  selectedToolId,
}) => {
  const blogsLength = blogs?.length;
  const convertToRequiredDate = (date: any) => {
    const newMonth = date.getUTCMonth();
    const monthName = Months[newMonth];
    let fullDate =
      monthName + " " + date.getUTCDate() + ", " + date.getUTCFullYear();
    return fullDate;
  };

  const BlogCardsContainer = styled.div`
    width: 83.5%;
    display: flex;
    align-items: baseline;
    justify-content: ${blogs?.length <= 2 ? "flex-start" : "space-between"};
    flex-wrap: wrap;
  `;
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
                {tools.map((card: any) => {
                  return (
                    <ToolCard
                      key={card?.id}
                      icon={Improver}
                      title={card?.title}
                      id={card?.id}
                      onToolSelect={onToolSelect}
                      selectedToolId={selectedToolId}
                    />
                  );
                })}
              </ToolCardWrapper>
            </ToolSelectionContainer>
          </ToolSelectionWrapper>
          <BlogCardsWrapper>
            <BlogCardsContainer>
              {blogs.map((blog: any) => {
                const { toolID, author, title, date } = blog;
                const realTime = new Date(date);
                const fullDate = convertToRequiredDate(realTime);
                return (
                  <BlogCard
                    key={`${toolID}+${title}`}
                    image={BlogCardImage}
                    toolID={toolID}
                    title={title}
                    author={author}
                    time={fullDate}
                    blogsLength={blogsLength}
                  />
                );
              })}
            </BlogCardsContainer>
          </BlogCardsWrapper>
        </PageContentContainer>
      </PageContentWrapper>
    </>
  );
};
