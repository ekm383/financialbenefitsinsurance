import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/clientServices/privateRoute"
import SecureLayout from "../components/clientServices/SecureLayout"
import styled from "styled-components"
import Profile from "../components/clientServices/profile"
import Login from "../components/clientServices/login"

const SecureApp = () => (
  <SecureLayout>
    <StyledSecureApp>
      <Router>
        <PrivateRoute path="/client-app/profile" component={Profile} />
        <Login path="/client-app/login" />
      </Router>
    </StyledSecureApp>
  </SecureLayout>
)

const StyledSecureApp = styled.div`
  height: 80vh;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default SecureApp
