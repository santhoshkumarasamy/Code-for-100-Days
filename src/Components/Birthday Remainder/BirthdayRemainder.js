import React, { Component } from "react";
import { defBirthdays } from "./Birthdays";
import "./BirthdayRemainder.css";
class BirthdayRemainder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      birthdays: defBirthdays,
    };
  }
  clearBirthDay = () => {
    console.log("Hi");
    this.setState({
      birthdays: [],
    });
  };
  render() {
    const { clearBirthDay } = this;
    const { birthdays } = this.state;
    return (
      <div className="mainBody">
        <div className="birthdayBox">
          <div className="noOfBirthDays">{birthdays.length} Birthdays</div>
          {birthdays.map((value, key) => {
            return (
              <div className="birthdays">
                <div className="birthdayImage">
                  <img src={value.img} alt={value.Name}></img>
                </div>
                <div className="birthdayDetails">
                  <div className="birthdayName">{value.Name}</div>
                  <div className="birthdayDate">{value.date}</div>
                </div>
              </div>
            );
          })}
          <div className="clearButton">

          
          <button
            className="clearBirthDay"
            onClick={(event) => {
              clearBirthDay();
            }}
          >
            Clear All
          </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BirthdayRemainder;
