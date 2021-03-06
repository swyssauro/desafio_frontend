import React, { Component } from 'react'
import './styles.css';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: 'registrar' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical>
        <Link to="/">
        <Menu.Item
          className="menu-a-list"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/registro">
        <Menu.Item
          className="menu-a-list"
          name='registrar'
          active={activeItem === 'registrar'}
          onClick={this.handleItemClick}
        />
        </Link>
      </Menu>
    )
  }
}