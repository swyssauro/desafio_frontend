import React, { Component } from 'react'
import './styles.css';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalSecondary extends Component {
  state = { activeItem: 'Perfil' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical>
        <Menu.Item
          className="menu-a-list"
          name='Perfil'
          active={activeItem === 'Perfil'}
          onClick={this.handleItemClick}
        />
        <Link to="/cargos">
        <Menu.Item
          className="menu-a-list"
          name='cargos'
          active={activeItem === 'cargo'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Link to="/explore">
        <Menu.Item
          className="menu-a-list"
          name='explore'
          active={activeItem === 'explore'}
          onClick={this.handleItemClick}
        />
        </Link>
      </Menu>
    )
  }
}