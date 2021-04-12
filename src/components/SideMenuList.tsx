import React from 'react'
import Link from 'next/link'
import { List, ListItem } from '@material-ui/core'

const SideMenuList: React.FC = () => {
  return (
    <List component="nav" aria-label="secondary mailbox folders">
      <ListItem button>
        <Link href="/projects">プロジェクト一覧</Link>
      </ListItem>
      <ListItem button>
        <Link href="/project-create">プロジェクトを作成する</Link>
      </ListItem>
    </List>
  )
}

export default SideMenuList
