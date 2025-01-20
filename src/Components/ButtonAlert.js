import React, {useState,useEffect} from "react";

import Card from "./Common/Card";

function ButtonAlert() {

    const [showCards,setCadList] = useState(false)

const clickHandler = () => {
    setCadList(!showCards)
  };

  return (
    <div>
      <button onClick={clickHandler}>Click me</button>
         {showCards == true ? <Card/> : <p>No cards</p>}
    </div>
  );
}

export default ButtonAlert;
