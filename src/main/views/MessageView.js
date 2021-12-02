import { observer } from "mobx-react";
import React from "react";
import { Container } from 'semantic-ui-react';

@observer
class MessageView extends React.PureComponent {
  render() {
    return (
        <Container textAlign = 'center'>
            <h1>Message</h1>
        </Container>
    );
  }
}

export default MessageView;
