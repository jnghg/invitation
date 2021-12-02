import React from "react";
import { observer, inject } from "mobx-react";
import { autobind } from "core-decorators";
import TitleView from "../views/TitleView";
import PhotoView from "../views/PhotoView";
import CalanderView from "../views/CalanderView";
import CommentView from "../views/CommentView";
import MessageView from "../views/MessageView";
import MapView from "../views/MapView";

@inject("mainStore")
@observer
@autobind
class MainContaner extends React.Component {

  componentDidMount() {

  }

  componentWillUnmount() {}

  render() {

    return (
      <>
        <TitleView />
        <CommentView />
        <CalanderView />
        <PhotoView />
        <MapView />
        <MessageView />
      </>
    );
  }
}

export default MainContaner;
