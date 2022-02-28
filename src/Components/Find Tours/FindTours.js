import { deftours } from "./Tours";
import "./tours.css";
import React, { Component } from "react";

class FindTours extends Component {
  constructor(props) {
    super(props);
    // console.log("cons");
    this.state = {
      tours: deftours.map((item) => {
        return { ...item, less: true };
      }),
    };
  }
  remove = (index) => {
    this.setState((prevState) => {
      return prevState.tours.splice(index, 1);
    });
  };
  showLess = (index) => {
    const lessed = this.state.tours.map((item, i) => {
      // console.log(i + " " + index);
      if (i === index) {
        return { ...item, less: !item.less };
      } else {
        return item;
      }
    });
    // console.log(lessed);
    this.setState({
      tours: lessed,
    });
  };
  render() {
    // console.log(this.state.tours);
    // const imagesLoaded = useOnLoadImages(this.state.wrapperRef);
    return (
      <div
        className="findTours"
        // ref={wrapperRef}
      >
        <>
          <h2 className="title">Find Tours</h2>
          {this.state.tours.map((tour, index) => {
            return (
              <div key={index} className="tour">
                <img
                  className="tourImg"
                  src={"images/" + tour.img}
                  alt={tour.title}
                />
                <div className="tourTitle">
                  <h3>{tour.title}</h3>
                  <h4 className="price">{tour.price}</h4>
                </div>
                <div className="tourDet">
                  <p align="justify" className="tourInfo">
                    {tour.less?tour.info.slice(0,400)+"..":tour.info}
                    <button
                      className="lessBtn"
                      onClick={() => {
                        this.showLess(index);
                      }}
                    >
                      {tour.less ? "Show More" : "Show Less"}
                    </button>{" "}
                  </p>
                </div>

                <button
                  className="removeBtn"
                  id={index}
                  onClick={(event) => {
                    this.remove(index);
                  }}
                >
                  Not Interested
                </button>
              </div>
            );
          })}
        </>
      </div>
    );
  }
}

export default FindTours;
