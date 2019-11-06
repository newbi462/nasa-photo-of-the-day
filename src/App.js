import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";


function App() {
  //
  const [apiData, setSpiData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=DEMO_KEY`)
    .then(response => {
      console.log(response.data.photos)
      //setSpiData(response.data.message)
    })
    .catch( error => {
      console.log("sorry no dogs", error)
    })
  },[])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! Still
      </p>
    </div>
  );
}

export default App;
