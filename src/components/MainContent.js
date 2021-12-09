import React from "react";
import styled from "styled-components";

const MainContentSection = styled.section`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    margin-top: 2%;
    text-decoration: none;
  }

  img {
    height: 50rem;
  }
`;

function MainContent(props) {
  return (
    <MainContentSection>
      {props.data ? (
        <>
          <h1>{props.data.title}</h1>
          <h3>{props.data.date}</h3>
          <img src={props.data.url} alt="Nasa photo of the day" />
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
