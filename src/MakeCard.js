import React from "react";
import styled from "styled-components";


const MarsCards = styled.div`
  background: red;
  color: white;
  width: 30%;
  padding: 15px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 10px 0;
  transition: transform 0.2s ease-in;

  &:hover {
    transform: translate(-5px) scale(1.25);
  }
`;

const PicTag = styled.img`
  width: 100%;
`;

/*THIS WONT LET ME STYLE AN IMG so had to do that in CSS*/

export default function MakeCard(props) {

  return (
    <>
      {props.propsName.map(function(item) {
        return (

            <MarsCards className="card" key={item.id}>
              <span>{item.rover.name}</span>
              <PicTag src={item.img_src} />
              <span>{item.camera.name}</span>
            </MarsCards>

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
