import React from "react";

export default function MakeCard(props) {

  return (
    <div className="card">
      {props.propsName.map(function(item) {
        return (
          <div className="card" key={item.id}>
            <span>{item.rover.name}</span>
            <img className="dog-image" alt="random dog" src={item.img_src}/>
            <span>{item.camera.name}</span>
          </div>
        );
      })}

    </div>
  );
}

/*
    key={apiData.id}
    picUrl={apiData.img_src}
    rover={apiData.rover.name}
    camera={apiData.camera.name}
*/
