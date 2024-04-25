import {data} from '../screen/data.js'
import React, { useState } from "react";
import Navbar from '../component/Navbar.js';
import Footer from '../component/Footer.js';
import { ImSpoonKnife } from "react-icons/im";
import { LiaMapMarkerSolid } from "react-icons/lia";
import './restaurant.css';


const Restaurant = () => {
    const [hotel, setHotel] = useState(data);

    const Debounce = function (func, delay) {
      let timer;
  
      return function () {
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    };
  
    const FILTERData = Debounce((name) => {
      const filterData = data.filter((item) => {
        if (item.name.toLowerCase().includes(name.trim())) {
          return true;
        }
        return false;
      });
      setHotel(filterData);
    }, 500);
  
    function debounce(e) {
      FILTERData(e.target.value);
    }
  
    function updateRatings(e) {
      let obj = [...hotel];
      obj[0].rating = e.target.value;
      setHotel(obj);
    }
    return (
        <>
        <Navbar/>
      <div className="cont">
        <div className="upper">
          <div className="one">
            <input
              type="text"
              name="search"
              placeholder="search food"
              onChange={debounce}
            />
          </div>
  
  
          <div className="one">
            <input
              type="number"
              name="rating"
              placeholder="Enter Ratings"
              onChange={updateRatings}
            />
          </div>
        </div>
  
        <div className="all_card">
          {hotel.map((item) => {
            return (
  
              <div
                className="card"
                key={item._id.$oid}
                style={{
                  borderRadius: ".5rem",
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                  margin: "0.5rem",
                  backgroundColor: "#ffffff",
                }}
              >
                <div className="name_sec">
                  <h5>{item.name}</h5>
                  <span>Rrating:{item.rating}</span>
                </div>
                <div className="adds">
                  <span><LiaMapMarkerSolid />{item.address}</span>
                  <span>{ }</span>
                </div>
                <div className="code">
                  <span>{item.outcode}</span>
                  <span>{item.postcode}</span>
                </div>
                <div className="last_sec">
                  <span>
                    <ImSpoonKnife />
                  </span>
                  <span className="types">{item.type_of_food}</span>
                  <p>Visit Menu</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer/>
      </>
    );
}

export default Restaurant