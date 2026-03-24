import { createBrowserRouter } from 'react-router'
import { PATHS } from './paths'

export const router = createBrowserRouter([
  {
    path: PATHS.ROOT,
    Component: () => 'Hello, World!',
  },
])
