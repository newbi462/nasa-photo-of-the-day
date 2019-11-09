import React from "react";
import styled from "styled-components";


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

export default function BackButton(props) {
  if (props.page > 1) {
    return <StyleButton onClick={()=> props.setPage(props.page - 1)}>Last 25</StyleButton>;
  }
  else {
    return <StyleButton></StyleButton>;
  }
}

/*
    key={apiData.id}
    picUrl={apiData.img_src}
    rover={apiData.rover.name}
    camera={apiData.camera.name}
*/
