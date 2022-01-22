import lazy from 'react-lazy-with-preload'
import { routes } from './routes'

export const AuthedRoutesData = [
  {
    title: 'Index',
    path: routes.index,
    component: lazy(() => import('pages/index')),
  },
]

export const UnAuthedRoutesData = [
  {
    title: 'Index',
    path: routes.index,
    component: lazy(() => import('pages/index')),
  },
  {
    title: 'Register',
    path: routes.register,
    component: lazy(() => import('pages/register')),
  },
  {
    title: 'Login',
    path: routes.login,
    component: lazy(() => import('pages/login')),
  },
]

export const authRoutes = [...AuthedRoutesData]
export const unAuthRoutes = [...UnAuthedRoutesData]
