import React from "react";


export default function BackButton(props) {
  if (props.page > 1) {
    return <button onClick={()=> props.setPage(props.page - 1)}>Last 25</button>;
  }
  else {
    return <div></div>;
  }
}

/*
    key={apiData.id}
    picUrl={apiData.img_src}
    rover={apiData.rover.name}
    camera={apiData.camera.name}
*/
