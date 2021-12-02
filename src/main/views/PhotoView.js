import { observer } from "mobx-react";
import React from "react";

@observer
class PhotoView extends React.PureComponent {
  render() {
    return (
      <div>
          <h1>Photo</h1>
      </div>
    );
  }
}

export default PhotoView;
