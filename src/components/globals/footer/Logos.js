import React from "react"
import styled from "styled-components"
import logo01 from "../../../images/logos/aetna-logo.jpg"
import logo02 from "../../../images/logos/aloha-care-logo.jpg"
import logo03 from "../../../images/logos/cigna-logo.jpg"
import logo04 from "../../../images/logos/humana-logo.jpg"
import logo05 from "../../../images/logos/mutual-of-omaha-logo.jpg"
import logo06 from "../../../images/logos/ohana-health-plan-logo.jpg"
import logo07 from "../../../images/logos/silverscript-logo.jpg"
import logo08 from "../../../images/logos/transamerica-logo.jpg"
import logo09 from "../../../images/logos/united-american-insurance-company-logo.jpg"
import logo10 from "../../../images/logos/united-health-care-logo.jpg"
import logo11 from "../../../images/logos/well-care-logo.jpg"

const Logos = () => {
  return (
    <LogoWrapper>
      <div class="logo-slider">
        <div class="logo-slide">
          <img src={logo01} alt="logo" />
          <img src={logo02} alt="logo" />
          <img src={logo03} alt="logo" />
          <img src={logo04} alt="logo" />
          <img src={logo05} alt="logo" />
          <img src={logo06} alt="logo" />
          <img src={logo07} alt="logo" />
          <img src={logo08} alt="logo" />
          <img src={logo09} alt="logo" />
          <img src={logo10} alt="logo" />
          <img src={logo11} alt="logo" />
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
  .logo-slider {
    width: 1000px;
    height: 100px;
    position: relative;
    background: white;
    display: flex;
    overflow: hidden;
  }
  .logo-slide {
    height: 100px;
    display: flex;
    align-items: center;
    animation: slideshow 24s linear infinite;
  }
  .logo-slide img {
    height: 70px;
    padding: 0 30px 0 30px;
  }
  @keyframes slideshow {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-60%);
    }
  }
  .logo-slider::before,
  .logo-slider::after {
    height: 100px;
    width: 200px;
    position: absolute;
    content: "";
    background: linear-gradient(
      to right,
      white 0%,
      rgba(255, 255, 255, 0) 100%
    );
    z-index: 2;
  }
  .logo-slider::before {
    left: 0;
    top: 0;
  }
  .logo-slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
`

export default Logos
