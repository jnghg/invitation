import { observer } from "mobx-react";
import React from "react";
import { Container, Header } from "semantic-ui-react";

@observer
class CommentView extends React.PureComponent {
  render() {
    return (
        <Container textAlign = 'center'>
            <Header
                as='h1'
                content='Comment'
                inverted
                style={{
                    fontSize: '4em',
                    fontWeight: 'normal',
                    backgroundColor: 'blue'
                    // backgroundImage:
                }}
            />
            
        </Container>
    );
  }
}

export default CommentView;
