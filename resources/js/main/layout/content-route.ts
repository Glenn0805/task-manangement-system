import React, { lazy } from 'react'

const TaskComponent: React.FC = lazy(() => import('../component/task-component/TaskComponent'))

const contentRoute: { path: string; element: React.FC; id: string; index?: boolean }[] = [
  { path: '/task', element: TaskComponent, id: 'task' },
]
