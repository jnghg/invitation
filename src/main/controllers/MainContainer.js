import React from "react";
import { observer, inject } from "mobx-react";
import { autobind } from "core-decorators";
import MainView from "../views/MainView";
import SideBar from "../views/Sidebar";

@inject("mainStore")
@observer
@autobind
class MainContaner extends React.Component {

  componentDidMount() {

  }

  componentWillUnmount() {}

  render() {

    const { mainStore } = this.props;
    const { getSidebarItems } = mainStore;

    return (
      <>
        <MainView />
        <SideBar 
          getSidebarItems = { getSidebarItems }
        />
      </>
    );
  }
}

export default MainContaner;
