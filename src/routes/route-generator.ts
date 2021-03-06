import lazy from 'react-lazy-with-preload'
import { routes } from './routes'

export const AuthedRoutesData = [
  {
    title: 'Index',
    path: routes.index,
    component: lazy(() => import('pages/index')),
  },
  {
    title: 'Posts Detail',
    path: routes.singlePost,
    component: lazy(() => import('pages/posts/[postId]')),
  },
  {
    title: 'Friends',
    path: routes.friends,
    component: lazy(() => import('pages/friends')),
  },
  {
    title: 'Friends Request',
    path: routes.friendsRequest,
    component: lazy(() => import('pages/friends/request')),
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
  {
    title: 'Posts Detail',
    path: routes.singlePost,
    component: lazy(() => import('pages/posts/[postId]')),
  },
]

export const authRoutes = [...AuthedRoutesData]
export const unAuthRoutes = [...UnAuthedRoutesData]
