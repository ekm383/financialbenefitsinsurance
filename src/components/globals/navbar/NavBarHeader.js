import React from "react"

import styled from "styled-components"

const NavBarHeader = () => {
  return <HeaderWrapper></HeaderWrapper>
}

const HeaderWrapper = styled.div`
  padding: 1rem 0rem 0.9rem 0.5rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .toggle-icon {
    position: relative;
    z-index: 9998;
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
