import React from "react"
import styled from "styled-components"

const BannerPage = ({ style, title, titleSmall, subtitle, children }) => {
  return (
    <BannerWrapper style={style}>
      <div className="box">
        <h1 className="title">{title}</h1>
        <h2 className="titleSmall">{titleSmall}</h2>
        <h3 className="subtitle">{subtitle}</h3>
        {children}
      </div>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  width: 90%;
  margin: 6rem auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: var(--white);
  .box {
    flex-basis: 80%;
    text-align: center;
  }
  img {
    width: 50%;
  }
  .title,
  .subtitle {
    margin-top: 0px;
    margin-bottom: 10px;
  }
  .title {
    font-size: 3rem;
    font-style: italic;
    line-height: 3.5rem;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
  }
  .titleSmall {
    line-height: 4rem;
    letter-spacing: 0px;
  }
  .subtitle {
    font-size: 0.7rem;
    font-weight: lighter;
    line-height: 1.2rem;
  }
  @media (max-width: 768px) {
    flex-basis: 90%;
    justify-content: flex-start;
    margin: 3rem auto;
    .box {
      flex-basis: 100%;
      text-align: center;
    }
    img {
      width: 60%;
    }
    .titleSmall {
      font-size: 2rem;
      line-height: 2rem;
    }
    .subtitle {
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 1.2rem;
    }
  }
`

export default BannerPage
