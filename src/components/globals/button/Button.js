import React from "react"
import styled from "styled-components"

const Button = ({ children, style }) => {
  return <ButtonWrapper style={style}>{children}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
  /* width: 10rem; */
  display: block;
  margin-top: 1rem;
  color: var(--mainColor);
  background: var(--white);
  border: 1px solid var(--white);
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: 0.8rem;
  letter-spacing: 1px;
  font-weight: 400;
  transition: all 0.2s linear;
  &:hover {
    background: transparent;
    border: 1px solid var(--white);
    color: var(--white);
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    margin: 0rem auto;
  }
`

export default Button
