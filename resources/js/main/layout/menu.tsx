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
  {
    key: 'main',
    label: menuLabelLink('/', 'Tasks'),
    icon: <ProjectOutlined />,
  },
  {
    key: 'account-setting',
    label: menuLabelLink('/account-setting', 'Account'),
    icon: <UserOutlined />,
  },
]

export default menu
