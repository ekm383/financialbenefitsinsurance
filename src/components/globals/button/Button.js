import React from "react"
import styled from "styled-components"

const Button = ({ children, style }) => {
  return <ButtonWrapper style={style}>{children}</ButtonWrapper>
}

const ButtonWrapper = styled.button`
  display: block;
  margin-top: 1rem;
  margin-right: 0.5rem;
  color: var(--mainColor);
  background: var(--white);
  border: 1px solid var(--white);
  border-radius: 5px;
  cursor: pointer;
  padding: 1rem 2rem 1rem 2.5rem;
  transition: all 0.2s linear;
  svg {
    font-size: 1rem;
    vertical-align: middle;
    margin-top: -2px;
    margin-left: 0.4rem;
  }
  &:hover {
    background: transparent;
    border: 1px solid var(--white);
    color: var(--white);
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    margin: 0.5rem auto 0rem auto;
    padding: 0.5rem 1rem 0.5rem 1rem;
    font-size: 1.1rem;
  }
`

export default Button
