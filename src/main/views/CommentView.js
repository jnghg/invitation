import { observer } from "mobx-react";
import React from "react";

@observer
class CommentView extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>Comment</h1>
      </div>
    );
  }
}

export default CommentView;
