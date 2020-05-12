import React from "react"
import styled from "styled-components"

const SectionRow = ({ id, heading, subheading, text, style }) => {
  return (
    <SectionWrapper id={id} style={style}>
      <div>
        <h4>{heading}</h4>
        <h6>{subheading}</h6>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  width: 80vw;
  margin: 0rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  div {
    flex-basis: 50%;
  }
  h4 {
    color: var(--mainColor);
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 4px;
  }
  h6 {
    letter-spacing: 4px;
  }
  @media (max-width: 768px) {
    width: 90vw;
    div {
      flex-basis: 90%;
      margin-bottom: 1rem;
    }
  }
`

export default SectionRow
