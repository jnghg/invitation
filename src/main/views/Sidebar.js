import { observer } from 'mobx-react'
import React from 'react'
import { Menu } from 'semantic-ui-react'

@observer
class Sidebar extends React.PureComponent {

  render() {
    
    const { getSidebarItems } = this.props;

    console.log('getSidebarItems: ', getSidebarItems)

    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Title</Menu.Header>

          <Menu.Menu>
            <Menu.Item
              name='Eco'
              // active={activeItem === 'enterprise'}
              // onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Tech'
              // active={activeItem === 'consumer'}
              // onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu.Item>

      </Menu>
    )
  }
}

export default Sidebar;
