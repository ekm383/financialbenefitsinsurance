import React from "react"
import { Link, navigate } from "gatsby"
import { isLoggedIn, logout } from "./auth"
import styled from "styled-components"

const NavBar = () => {
  let greetingMessage = ""
  if (isLoggedIn()) {
    greetingMessage = "Aloha, FBIHI Agent"
  } else {
    greetingMessage = "You are not logged in"
  }
  return (
    <StyledSecureNavbar>
      <span>{greetingMessage}</span>
      <nav>
        <Link to="/">Home</Link>
        {` `}
        <Link to="/agent-app/profile">Videos</Link>
        {` `}
        {isLoggedIn() ? (
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/agent-app/login`))
            }}
          >
            Logout
          </a>
        ) : null}
      </nav>
    </StyledSecureNavbar>
  )
}

const StyledSecureNavbar = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  span {
    color: var(--lightGray);
    font-size: 10px;
    padding-top: 5px;
  }
  nav {
    font-family: "Merriweather";
    margin-right: 2rem;
    a {
      margin-right: 1.5rem;
      color: var(--mainColor);
    }
  }
  @media (max-width: 768px) {
    nav {
      margin-right: 0rem;
      a {
        margin-right: 1rem;
      }
    }
  }
`

export default NavBar
