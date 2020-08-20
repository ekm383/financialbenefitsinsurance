import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/privateRoute"
import SecureLayout from "../components/SecureLayout"
import styled from "styled-components"
import Profile from "../components/profile"
import Login from "../components/login"

const SecureApp = () => (
  <SecureLayout>
    <StyledSecureApp>
      <Router>
        <PrivateRoute path="/app/profile" component={Profile} />
        <Login path="/app/login" />
      </Router>
    </StyledSecureApp>
  </SecureLayout>
)

const StyledSecureApp = styled.div`
  width: 60vw;
  height: 60vh;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default SecureApp
