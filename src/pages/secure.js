import React from "react"
import { Link } from "gatsby"
import { getUser, isLoggedIn } from "../components/services/auth"
import styled from "styled-components"

import SecureLayout from "../components/SecureLayout"

const SecurePage = () => {
  return (
    <SecureLayout>
      <StyledSecurePage>
        <h1>Aloha{isLoggedIn() ? getUser().name : ""}!</h1>
        <p>
          {isLoggedIn() ? (
            <>
              You are logged in, so check your{" "}
              <Link to="/app/profile">profile</Link>
            </>
          ) : (
            <>
              You need to <Link to="/app/login">log in</Link> to see restricted
              content.
            </>
          )}
        </p>
      </StyledSecurePage>
    </SecureLayout>
  )
}

const StyledSecurePage = styled.div`
  width: 60vw;
  height: 60vh;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 3rem;
    font-style: italic;
  }
  p {
    font-size: 1rem;
  }
`

export default SecurePage
