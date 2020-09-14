import React from "react"
import styled from "styled-components"
import logo01 from "../../images/logos/north-american.jpg"
import logo02 from "../../images/logos/protective.jpg"
import logo03 from "../../images/logos/banner-life.jpg"
import logo04 from "../../images/logos/prudential.jpg"
import logo05 from "../../images/logos/principal.jpg"

const LifeInsuranceLogos = () => {
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

export default LifeInsuranceLogos
