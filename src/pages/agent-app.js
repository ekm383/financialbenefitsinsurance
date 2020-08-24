import React from "react"
import { Router } from "@reach/router"
import PrivateRoute from "../components/agentServices/privateRoute"
import SecureLayout from "../components/agentServices/SecureLayout"
import styled from "styled-components"
import Profile from "../components/agentServices/profile"
import Login from "../components/agentServices/login"

const SecureApp = () => (
  <SecureLayout>
    <StyledSecureApp>
      <Router>
        <PrivateRoute path="/agent-app/profile" component={Profile} />
        <Login path="/agent-app/login" />
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
