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
  margin: 0px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: var(--white);
  .box {
    flex-basis: 80%;
    text-align: center;
    padding: 5rem 0rem 6rem 0rem;
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
    line-height: 3.5rem;
    text-transform: uppercase;
  }
  .titleSmall {
    line-height: 4rem;
  }
  .subtitle {
    font-size: 0.7rem;
    font-weight: lighter;
    line-height: 1.2rem;
  }
  @media (max-width: 768px) {
    flex-basis: 90%;
    justify-content: flex-start;
    .box {
      flex-basis: 100%;
      text-align: center;
      padding: 3rem 0rem 3rem 0rem;
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
