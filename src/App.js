import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";


import MakeCard from "./MakeCard";


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
      <button onClick={()=> setPage(page + 1)}>Next 25</button>
      {/*<p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! Still
      </p>*/}
      <div>
      <MakeCard propsName={apiData}/>
      </div>
    </div>
  );
}

export default App;
