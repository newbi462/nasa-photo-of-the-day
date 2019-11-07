import React from "react";
import styled from "styled-components";


const MarsCards = styled.div`
/*  background: red;
  display: flex;
  width: 200px;
  padding: 30px;*/
`;

/*THIS WONT LET ME STYLE AN IMG so had to do that in CSS*/

export default function MakeCard(props) {

  return (
    <>
      {props.propsName.map(function(item) {
        return (

            <div className="card" key={item.id}>
              <span>{item.rover.name}</span>
              <img className="dog-image" alt="random dog" src={item.img_src}/>
              <span>{item.camera.name}</span>
            </div>

        );
      })}
    </>


  );
}

/*
    key={apiData.id}
    picUrl={apiData.img_src}
    rover={apiData.rover.name}
    camera={apiData.camera.name}
*/
