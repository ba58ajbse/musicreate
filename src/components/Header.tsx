import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import styles from '../styles/css/Header.module.css'
import SideMenu from './SideMenu'

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <>
      <AppBar position="relative" elevation={0}>
        <Toolbar>
          <Typography variant="h5" noWrap>
            Logo
          </Typography>
          <div className={styles.menu_wrap}>
            <IconButton edge="end" disableRipple onClick={() => setOpenMenu(!openMenu)}>
              <Menu style={{ fontSize: 40 }} />
            </IconButton>
          </div>
        </Toolbar>
        <SideMenu openMenu={openMenu} toggleOpenMenu={toggleOpenMenu} />
        {/* <StyledToolBar>
          <Typography variant="h5" noWrap>
            Logo
          </Typography>
          <StyledIconWrap>
            <IconButton edge="end" disableRipple onClick={() => setOpenMenu(!openMenu)}>
              {!openMenu && <Menu style={{ fontSize: 40 }} />}
            </IconButton>
          </StyledIconWrap>
        </StyledToolBar>
        <SideMenu openMenu={openMenu} toggleOpenMenu={toggleOpenMenu} /> */}
      </AppBar>
    </>
  )
}

export default Header
