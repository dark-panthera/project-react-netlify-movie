import React, { Component } from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Dashboard from "../components/Dashboard/Dashboard";
import View from "../components/View/View";
import Header from "../components/Dashboard/Header/Header";
import Backdrop from "../components/Backdrop/Backdrop";
import SideBar from '../components/Sidebar/Sidebar';

export const history = createHistory();

class AppRouter extends Component {
  state = {
    showFilter: true,
    showBackdrop: false,
    showSidebar: false,
    redirect: ''
  };

  onToggleFilter = () => {
    this.setState({
      showFilter: !this.state.showFilter
    });
  };

  onHideBackdrop = () => {
    // alert('click')
    this.setState({
      showSidebar: !this.state.showSidebar,
      showBackdrop: !this.state.showBackdrop
    });
  };

  onHideSidebar = () => {
    //  alert('click')
    this.setState({
      showSidebar: !this.state.showSidebar,
      showBackdrop: !this.state.showBackdrop
    });
  };

  onRedirect = (page) => {
    this.setState({
      redirect: page
    });
  };

  render() {
    return (
      <Router history={history}>
        <div>
          <Header
            onToggleFilter={this.onToggleFilter}
            onHideSidebar={this.onHideSidebar}
          />
          {this.state.showSidebar ? (
            <div>
              <SideBar
                onHideBackdrop={this.onHideBackdrop}
                onHideSidebar={this.onHideSidebar}
                onRedirect={this.onRedirect}
                history={history}
              />
            </div>
          ) : null}

          {this.state.showBackdrop ? (
            <div>
              <Backdrop onHideBackdrop={this.onHideBackdrop} />
            </div>
          ) : null}

          <Switch>
            <Route
              path="/"
              component={() => (
                <Dashboard
                  onHideSidebar={this.onHideSidebar}
                  onHideBackdrop={this.onHideBackdrop}
                  onToggleFilter={this.onToggleFilter}
                  showFilter={this.state.showFilter}
                />
              )}
              exact={true}
            />
            <Route path="/dashboard" component={() => (
              <Dashboard
                onHideSidebar={this.onHideSidebar}
                onHideBackdrop={this.onHideBackdrop}
                onToggleFilter={this.onToggleFilter}
                showFilter={this.state.showFilter}
              />
            )} />
            <Route path="/movie/:id" component={View} />

            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default AppRouter;
