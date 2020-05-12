import React from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import img from '../../../images/fbihi-logo-gray.png'
import styled from "styled-components"

const NavBarHeader = ({ handleNavBar }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <img src={img} alt="logo" width="90px" />
      </Link>
      <FaBars
        className="toggle-icon"
        onClick={() => {
          handleNavBar()
        }}
      />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  padding: 1rem 0rem 0.9rem 0.5rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    font-size: 2rem;
    color: var(--mainColor);
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
    padding: 0.4rem 1rem;
  }
`

export default NavBarHeader
