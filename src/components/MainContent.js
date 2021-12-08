import React from "react";
import "./MainContent.css";

function MainContent(props) {
  if (props.data) {
    console.log(props.data.title);
  }
  return (
    <section>
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
    </section>
  );
}

export default MainContent;
