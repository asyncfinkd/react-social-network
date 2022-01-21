import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default function MenuBar() {
  const pathname = window.location.pathname
  const path = pathname === '/' ? 'home' : pathname.substr(1)

  const [activeItem, setActiveItem] = React.useState(path)

  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={() => setActiveItem('home')}
          as={Link}
          to="/"
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={activeItem === 'login'}
            onClick={() => setActiveItem('login')}
            as={Link}
            to="/login"
          />
          <Menu.Item
            name="register"
            active={activeItem === 'register'}
            onClick={() => setActiveItem('register')}
            as={Link}
            to="/register"
          />
        </Menu.Menu>
      </Menu>
    </div>
  )
}
