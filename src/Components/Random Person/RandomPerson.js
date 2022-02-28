import React, { useState, useEffect } from "react";
import axios from "axios";
import "./randomPerson.css";
function RandomPerson(props) {
  const [detailToShow, setDetail] = useState("name");
  // console.log(props.person);
  // console.log(detailToShow)
  var det = detailToShow;
  // console.log(props[det]);
  function changeDetailToShow(event) {
    // console.log(event.target.id);
    setDetail(event.target.id);
  }
  return (
    <div className="randomBody">
      <div className="person">
        <img src={props.picture.large}></img>
        <div className="personDetail">
          {" "}
          Hi there, My {detailToShow + " is " + props[det]}{" "}
        </div>
      </div>
      <div className="personDetails">
        <div
          id="email"
          className={"detail"}
          onMouseEnter={(event) => changeDetailToShow(event)}
          onMouseLeave={() => {
           
              setDetail("name");
           
          }}
        >
          <i className="fa-solid fa-envelope-open "></i>
        </div>
        <div
          id="cell"
          className={"detail"}
          onMouseEnter={(event) => changeDetailToShow(event)}
          onMouseLeave={() => {
           
              setDetail("name");
        
          }}
        >
          <i className="fa-solid fa-phone "></i>
        </div>
        <div
          id="gender"
          className={"detail"}
          onMouseEnter={(event) => changeDetailToShow(event)}
          onMouseLeave={() => {
           
              setDetail("name");
         
          }}
        >
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
      <div className="newPerson">
        <button
          className="newPersonButton"
          onClick={() => props.getRandomPerson()}
        >
          Get Random Person
        </button>
      </div>
    </div>
  );
}

export default RandomPerson;
