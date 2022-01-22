export const AuthedRoutes = {
  index: '/',
  singlePost: '/posts/:postId',
  friends: '/friends',
  friendsRequest: '/friends/request',
}

export const UnAuthedRoutes = {
  index: '/',
  register: '/register',
  login: '/login',
  singlePost: '/posts/:postId',
}

export const routes = { ...AuthedRoutes, ...UnAuthedRoutes }
