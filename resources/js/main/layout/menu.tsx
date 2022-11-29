import React from 'react'
import { ProjectOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const menuLabelLink: React.FC = (link: string, label: string) => {
  return (
    <span>
      {label}
      <Link to={link} />
    </span>
  )
}

const menu: { key: string; label: React.ReactNode; icon?: React.ReactNode }[] = [
  { key: '1', label: menuLabelLink('/', 'Tasks'), icon: <ProjectOutlined /> },
  { key: '2', label: menuLabelLink('/account-setting', 'Account'), icon: <UserOutlined /> },
]

export default menu
