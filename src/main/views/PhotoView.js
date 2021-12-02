import { observer } from "mobx-react";
import React from "react";
import { Container } from 'semantic-ui-react';

@observer
class PhotoView extends React.PureComponent {
  render() {
    return (
        <Container textAlign = 'center'>
            <h1>Photo</h1>
        </Container>
    );
  }
}

export default PhotoView;
