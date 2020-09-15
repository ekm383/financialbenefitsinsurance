import React from "react"
import styled from "styled-components"
import logo01 from "../../images/logos/athene.jpg"
import logo02 from "../../images/logos/allianz.jpg"
import logo03 from "../../images/logos/north-american.jpg"
import logo04 from "../../images/logos/nationwide.jpg"
import logo05 from "../../images/logos/voya.jpg"

const AnnuityLogos = () => {
  return (
    <LogoWrapper>
      <div class="logo-slider">
        <div class="logo-slide">
          <img src={logo01} alt="logo" />
          <img src={logo02} alt="logo" />
          <img src={logo03} alt="logo" />
          <img src={logo04} alt="logo" />
          <img src={logo05} alt="logo" />
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

export default AnnuityLogos
