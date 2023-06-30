import React from "react";
import '../HomePage/HomePage.scss';
import { SliderComponent } from "../../components/SliderComponent";
import { Link } from "react-router-dom";


export const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__wrap">
        <div className="homepage__text">
          <h1 className="homepage__title">
            Title for wine
          </h1>
          <p className="homepage__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad omnis dignissimos corrupti magnam, exercitationem ipsum.
          </p>
          <Link to='wines'
            className="homepage__link"
          >
            By now
          </Link>
        </div>
        <div className="homepage__slider">
          <SliderComponent
          />
        </div>
      </div>
    </div>
  )
}
