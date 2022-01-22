import jwtDecode from 'jwt-decode'
import React from 'react'

const initialState = {
  user: null,
}

if (localStorage.getItem('jwtToken')) {
  // @ts-ignore
  const decodedToken = jwtDecode(localStorage.getItem('jwtToken'))

  // @ts-ignore
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken')
  } else {
    // @ts-ignore
    initialState.user = decodedToken
  }
}

const AuthContext = React.createContext<any>({
  user: null,
  login: (data: any) => {},
  logout: () => {},
})

function authReducer(state: any, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      }
    default:
      return state
  }
}

function AuthProvider(props: any) {
  const [state, dispatch] = React.useReducer(authReducer, initialState)

  function login(userData: any) {
    localStorage.setItem('jwtToken', userData.token)
    dispatch({
      type: 'LOGIN',
      payload: userData,
    })
  }

  function logout() {
    localStorage.removeItem('jwtToken')
    dispatch({
      type: 'LOGOUT',
    })
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  )
}

export { AuthContext, AuthProvider }
