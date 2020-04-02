import React, { Component } from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Filter from "./Filter/Filter";
import CardHolder from "../CardHolder/CardHolder";

class Dashboard extends Component {
  state = {
    show: true
  };

  onToggleShow = () => {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div>
        <Header toggle={this.onToggleShow.bind(this)} />
        <Banner />
        {this.state.show ? <Filter /> : null}
        <CardHolder />
      </div>
    );
  }
}

export default Dashboard;
