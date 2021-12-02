import { observer } from "mobx-react";
import React from "react";

@observer
class CalanderView extends React.PureComponent {
  render() {
    return (
      <div>
          <h1>Calander</h1>
      </div>
    );
  }
}

export default CalanderView;
