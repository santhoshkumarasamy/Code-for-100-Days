import RandomPerson from "./RandomPerson";

import React, { Component } from "react";
import axios from "axios";
class Random extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initial: null
    };
  }
  getRandomPerson = () => {
    axios.get("https://randomuser.me/api/").then((value) => {
      // console.log(value.data.results[0]);
      this.setState({
        initial: value.data.results[0],
      });
    });
  };

  componentDidMount() {
    this.getRandomPerson();

  }
  render() {
    if(this.state.initial){    
    var {name,cell,gender,email,picture}=this.state.initial;
    // console.log(name);
    var namev=name.first;
    return Object.keys(this.state.initial).length === 0  ? null : (
      <div className="App">
        <div className="topPortion"></div>
        <RandomPerson
          name={namev}
          cell={cell}
          gender={gender}
          email={email}
          picture={picture}
          getRandomPerson={() => {
            this.getRandomPerson();
          }}
        />
        <div className="bottomPortion"></div>
      </div>
    );}else{
      return null
    }
  }
}

export default Random