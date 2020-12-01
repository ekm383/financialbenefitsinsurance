import React from "react"
import styled from "styled-components"
import logo01 from "../../images/logos/ameritas.jpg"
import logo02 from "../../images/logos/spirit.jpg"

const DentalLogos = () => {
  return (
    <LogoWrapper>
      <div className="logo-slider">
        <div className="logo-slide">
          <img src={logo01} alt="logo" />
          <img src={logo02} alt="logo" />
        </div>
      </div>
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-slide img {
    height: 70px;
    padding: 0 30px 0 30px;
  }
`

export default DentalLogos
