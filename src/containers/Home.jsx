import React, { useState, useEffect } from "react";

import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import { connect } from "react-redux";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/App.scss";

// const API = "http://localhost:3000/initalState";

const Home = ({ myList, trends, originals }) => {
  // const initialState = useInitialState(API);
  return(
  <>
    <Search />
    {myList.length > 0 && (
      <Categories title="Mi Lista">
        <Carousel>
          {myList.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    )}
    <Categories title="Tendencias">
      <Carousel>
        {trends.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
    </Categories>
    <Categories title="Originales de Platzi Video">
      <Carousel>
        {originals.map((item) => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
    </Categories>
  </>);
};

/**
 *
 * @param {*} state Los valores pasados por referencia desde el primer nivel por medio del store ( consultar variable initialState en src/index.js)
 * @returns Los valores a ser usados en este componente
 */
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
