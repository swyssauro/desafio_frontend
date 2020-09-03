import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: 'Cargos' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical>
        <Menu.Item
          className="menu-a-list"
          name='Cargos'
          active={activeItem === 'Cargos'}
          onClick={this.handleItemClick}
        />
        <Link to="/perfil">
        <Menu.Item
          className="menu-a-list"
          name='perfil'
          active={activeItem === 'perfil'}
          onClick={this.handleItemClick}
        />
        </Link>
      </Menu>
    )
  }
}