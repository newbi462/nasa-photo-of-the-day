import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import "./App.css";


import MakeCard from "./MakeCard";
import BackButton from "./BackButton";


const ForceFlex = styled.div`
  display: flex
  flex-flow: row wrap;

`;

function App() {
  //
  const [apiData, setApiData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=DEMO_KEY`)
    .then(response => {
      console.log(response.data.photos)
      setApiData(response.data.photos)
    })
    .catch( error => {
      console.log("sorry no dogs", error)
    })
  },[page])


  return (
    <div className="App">
      <h1>Welsome To Mars</h1>
      <BackButton page={page} setPage={setPage} />
      <button onClick={() => setPage(page + 1)}>Next 25</button>
      {/*<p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! Still
      </p>*/}
      <ForceFlex>
        <>
        <MakeCard propsName={apiData} />
        </>
      </ForceFlex>
    </div>
  );
}

export default App;
