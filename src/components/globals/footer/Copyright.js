import React from "react"
import styled from "styled-components"

const Copyright = () => {
  return (
    <CopyrightWrapper className="copyright">
      &copy; Copyright 2022 | Financial Benefits Insurance
    </CopyrightWrapper>
  )
}

const CopyrightWrapper = styled.div`
  width: 100vw;
  text-align: center;
  padding: 1rem 0rem 1rem 0rem;
  font-size: 0.6rem;
  color: var(--white);
  background: var(--mainColor);
  a {
    color: var(--white);
  }
`

export default Copyright
