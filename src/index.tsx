import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, unAuthRoutes } from 'routes/route-generator'
import MenuBar from 'ui/menu-bar'
import { Container } from 'semantic-ui-react'
import { ApolloProvider } from '@apollo/client'
import client from 'apollo/provider'
import { AuthProvider, AuthContext } from 'context/auth'

const IndexPage = () => {
  const context = React.useContext(AuthContext)

  if (context.user === null && !localStorage.getItem('jwtToken')) {
    return (
      <Routes>
        {unAuthRoutes.map((el) => {
          return (
            <Route key={el.path} path={el.path} element={<el.component />} />
          )
        })}
      </Routes>
    )
  }

  return (
    <Routes>
      {authRoutes.map((el) => {
        return <Route key={el.path} path={el.path} element={<el.component />} />
      })}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Suspense fallback={false}>
            <Container>
              <MenuBar />
              <IndexPage />
            </Container>
          </Suspense>
        </BrowserRouter>
      </ApolloProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
