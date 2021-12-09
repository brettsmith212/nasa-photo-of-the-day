import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <MainContent data={data} />
    </>
  );
}

export default App;
