import React from "react"
import styled from "styled-components"

const Banner = ({ style, title, titleSmall, subtitle, children }) => {
  return (
    <BannerWrapper style={style}>
      <div className="box">
        <h2 className="titleSmall">{titleSmall}</h2>
        <h1 className="title">{title}</h1>
        <h3 className="subtitle">{subtitle}</h3>
        {children}
      </div>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  width: 80%;
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: var(--white);
  .box {
    flex-basis: 100%;
    text-align: left;
    margin-top: -7rem;
  }
  .title,
  .subtitle {
    margin-top: 0px;
    margin-bottom: 10px;
  }
  .title {
    font-size: 3rem;
    line-height: 3.5rem;
    font-style: italic;
    font-weight: 700;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
  }
  .titleSmall {
    font-size: 1rem;
    line-height: 3rem;
  }
  .subtitle {
    font-size: 0.7rem;
    font-weight: lighter;
    line-height: 1.2rem;
  }
  @media (max-width: 768px) {
    flex-basis: 90%;
    align-items: center;
    justify-content: flex-start;
    .box {
      text-align: center;
      margin-top: -10rem;
    }
    img {
      width: 60%;
    }
    .title {
      margin-bottom: 2rem;
      font-size: 1.4rem;
      line-height: 1.2rem;
    }
    .titleSmall {
      letter-spacing: 0px;
      font-size: 0.5rem;
      line-height: 2rem;
      margin-bottom: 1rem;
    }
    .subtitle {
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 1.2rem;
    }
  }
`

export default Banner
