import { observer } from "mobx-react";
import React from "react";

@observer
class TitleView extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Title</h1>
      </div>
    );
  }
}

export default TitleView;
