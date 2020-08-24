import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "./auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/client-app/login`) {
    navigate("/client-app/login")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
