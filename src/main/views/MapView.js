import { observer } from "mobx-react";
import React from "react";
import { Container } from "semantic-ui-react";

@observer
class MapView extends React.PureComponent {
  render() {
    return (
        <Container textAlign = 'center'>
            <h1>Map</h1>
        </Container>
    );
  }
}

export default MapView;
