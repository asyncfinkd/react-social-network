export const AuthedRoutes = {
  index: '/',
}

export const UnAuthedRoutes = {
  index: '/',
  register: '/register',
}

export const routes = { ...AuthedRoutes, ...UnAuthedRoutes }
