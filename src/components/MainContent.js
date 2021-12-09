import React from "react";
import styled from "styled-components";

const MainContentSection = styled.section`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: ${({ theme }) => theme.h1};
    color: ${({ theme }) => theme.secondaryColor};
  }

  h3 {
    font-size: ${({ theme }) => theme.h3};
    color: ${({ theme }) => theme.primaryColor};
  }

  a {
    margin-top: 2%;
    text-decoration: none;
    font-size: ${({ theme }) => theme.a};
    color: ${({ theme }) => theme.secondaryColor};
  }

  p {
    font-size: ${({ theme }) => theme.copyright};
    color: ${({ theme }) => theme.lightTextColor};
  }

  img {
    height: 50rem;
    border-radius: 10px;

    &:hover {
      transition: transform 0.2s ease-in-out;
      transform: scale(1.02);
    }
  }
`;

function MainContent(props) {
  return (
    <MainContentSection>
      {props.data ? (
        <>
          <h1>{props.data.title}</h1>
          <h3>{props.data.date}</h3>

          <a href={props.data.url} target="_blank">
            <img src={props.data.url} alt="Nasa photo of the day" />
          </a>
          <a href={props.data.url} target="_blank">
            {props.data.url}
          </a>
          <p>{props.data.copyright}</p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </MainContentSection>
  );
}

export default MainContent;
