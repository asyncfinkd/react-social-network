export const AuthedRoutes = {
  index: '/',
  singlePost: '/posts/:postId',
}

export const UnAuthedRoutes = {
  index: '/',
  register: '/register',
  login: '/login',
  singlePost: '/posts/:postId',
}

export const routes = { ...AuthedRoutes, ...UnAuthedRoutes }
