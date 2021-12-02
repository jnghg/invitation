import { observer } from "mobx-react";
import React from "react";
import { Container, Header } from 'semantic-ui-react'

@observer
class TitleView extends React.PureComponent {
  render() {
    return (
      <Container textAlign = 'center' className = 'titleView'>
          <Header
            as='h1'
          />
          <Header
            as='h1'
            content='결혼합니다'
            inverted
            style={{
              fontSize: '2em',
              fontWeight: 'normal',
              marginBottom: 0
            }}
          />
      </Container>
    );
  }
}

export default TitleView;
