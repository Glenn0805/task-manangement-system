import React, { lazy } from 'react'

const TaskComponent: React.FC = lazy(() => import('../component/task-component/TaskComponent'))
const AccountComponent: React.FC = lazy(() => import('../component/account/AccountComponent'))

const contentRoute: { path?: string; element: React.FC; id: string; index?: boolean }[] = [
  { path: '/', element: TaskComponent, id: 'task', index: true },
  { path: '/account-setting', element: AccountComponent, id: 'account', index: true },
]

export default contentRoute
