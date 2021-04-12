import React from 'react'
import { Drawer } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'
import SideMenuList from './SideMenuList'
import styles from '../styles/css/SideMenu.module.css'

type PropType = {
  openMenu: boolean
  toggleOpenMenu: () => void
}
const SideMenu: React.FC<PropType> = ({ openMenu, toggleOpenMenu }) => {
  return (
    <Drawer variant="persistent" anchor="right" open={openMenu}>
      <div className={styles.menu_top}>
        <button type="button" onClick={toggleOpenMenu} className={styles.arrow_button}>
          <ArrowForwardIos style={{ fontSize: 30 }} />
        </button>
      </div>
      <SideMenuList />
    </Drawer>
  )
}

export default SideMenu
