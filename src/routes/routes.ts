export const AuthedRoutes = {
  index: '/',
}

export const UnAuthedRoutes = {
  index: '/',
  register: '/register',
  login: '/login',
}

export const routes = { ...AuthedRoutes, ...UnAuthedRoutes }
