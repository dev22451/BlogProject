import React from "react";
import styled from "styled-components";

interface BlogCardProps {
  image?: string;
  tag?: string;
  title?: string;
  author?: string;
  time?: string;
}

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;

const CardContainer = styled.div`
  //   width: 83.5%;
  //   background-color: red;
  border-radius: 11px;
`;
const BlogImageWrapper = styled.div``;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
`;
const BlogDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const BlogTag = styled.span`
  background: #80808063;
  padding: 4px 15px;
  margin: 1rem 0;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
`;
const BlogTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  text-align: left;
`;
const BlogFooter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 16px;
  font-weight: 400;
`;
const BlogAuthor = styled.span`
  width: max-content;
  margin-bottom: 5px;
`;
const BlogDate = styled.span`
  width: max-content;
  margin-bottom: 5px;
`;
export const BlogCard: React.FC<BlogCardProps> = ({
  image,
  tag,
  title,
  author,
  time,
}) => {
  return (
    <>
      <CardWrapper>
        <CardContainer>
          <BlogImageWrapper>
            <BlogImage src={image} alt={title} />
          </BlogImageWrapper>
          <BlogDescription>
            <BlogTag>{tag}</BlogTag>
            <BlogTitle>{title}</BlogTitle>
            <BlogFooter>
              <BlogAuthor>{author}</BlogAuthor>
              <BlogDate>{time}</BlogDate>
            </BlogFooter>
          </BlogDescription>
        </CardContainer>
      </CardWrapper>
    </>
  );
};
