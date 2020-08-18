import React from "react"
import NavBarLinks from "./NavBarLinks"
import styled from "styled-components"

const NavBar = () => {
  return (
    <NavWrapper>
      <NavBarLinks />
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  width: 100%;
  background: var(--white);
  position: relative;
  z-index: 9999;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
export default NavBar
