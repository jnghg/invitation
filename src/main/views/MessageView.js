import { observer } from "mobx-react";
import React from "react";

@observer
class MessageView extends React.PureComponent {
  render() {
    return (
      <div>
          <h1>Message</h1>
      </div>
    );
  }
}

export default MessageView;
