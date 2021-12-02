import { observer } from "mobx-react";
import React from "react";
import { Container } from "semantic-ui-react";

@observer
class CalanderView extends React.PureComponent {
  render() {
    return (
        <Container textAlign = 'center'>
            <h1>Calander</h1>
        </Container>
    );
  }
}

export default CalanderView;
