import React, { Component } from "react";
import Banner from "./Banner/Banner";
import Filter from "./Filter/Filter";
import CardHolder from "../CardHolder/CardHolder";
import Pagination from "./Pagination/Pagination";

class Dashboard extends Component {
  render() {
    
    return (
      <div>
        <Banner />
        {this.props.showFilter ? (
          <div>
            <Filter />
          </div>
        ) : null}
        <CardHolder />
        <Pagination />
      </div>
    );
  }
}

export default Dashboard;
