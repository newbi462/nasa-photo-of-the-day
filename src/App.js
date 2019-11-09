import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

import "./App.css";


import MakeCard from "./MakeCard";
import BackButton from "./BackButton";


const ForceFlex = styled.div`
  display: flex
  flex-flow: row wrap;
  justify-content: space-around;
`;
const StyleButton = styled.div`
  background: pink;
  color: white
  width: 45%;
  padding: 8px 25px;
  border-radius: 8px;
  border: solid 1px pink;

  &:hover {
    color: purple;
    border: solid 1px purple;
    background: white;
  }
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

      <ForceFlex>
        <BackButton page={page} setPage={setPage} />
        <StyleButton onClick={() => setPage(page + 1)}>Next 25</StyleButton>
      </ForceFlex>
      {/*<p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! Still
      </p>*/}
      <ForceFlex>
        <>
        <MakeCard propsName={apiData} />
        </>
      </ForceFlex>

      <ForceFlex>
        <BackButton page={page} setPage={setPage} />
        <StyleButton onClick={() => setPage(page + 1)}>Next 25</StyleButton>
      </ForceFlex>
    </div>
  );
}

export default App;
