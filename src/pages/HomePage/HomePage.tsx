import React, { FC } from "react";
import '../HomePage/HomePage.scss';
import { SliderComponent } from "../../components/SliderComponent";
import { Link } from "react-router-dom";
import { InVino } from "../../components/InVinoVeritas";
import { ContainerWrap } from "../../components/ContainerWrap";
import { Category } from "../../components/Category";
import { WineCardType } from "../../types/WineCard";

type Props = {
  sliderComponent: WineCardType[] | null
}

export const HomePage: FC<Props> = ({
  sliderComponent
}) => {
  return (
    <>
      <ContainerWrap>
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
                sliderComponent={sliderComponent}
              />
            </div>
          </div>
        </div>
      </ContainerWrap>
      <InVino/>
      <Category/>
    </>
  )
}
