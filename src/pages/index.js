import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import styled from "styled-components"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import { FaArrowCircleRight } from "react-icons/fa"
import Fifty from "../components/globals/section/Fifty"
import BackgroundImage from "gatsby-background-image"

const IndexPage = () => {
  const image = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "background/fbihi-bg-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <IndexWrapper>
        <SEO
          title="Home"
          description="We are an independent insurance agency. We do not work for an insurance company; we work for you!`,
      author: `@financialbenefitsinsurance"
          keywords={[
            `Hawaii Term Life Insurance`,
            `Hawaii Medicare Supplements`,
            `Hawaii Medicare Advantage`,
            `Hawaii Health Insurance`,
          ]}
        />
        <HeaderIndex>
          <div className="BannerContainer">
            <Banner
              titleSmall="Welcome to Financial Benefits Insurance"
              title="Benefits are our business. Service sets us apart."
            >
              <div className="buttonContainer">
                <AniLink fade to="/services">
                  <Button>
                    View Our Services
                    <FaArrowCircleRight />
                  </Button>
                </AniLink>
                <a href="/">
                  <Button>
                    Book Appointment
                    <FaArrowCircleRight />
                  </Button>
                </a>
              </div>
            </Banner>
          </div>
        </HeaderIndex>
        <Fifty
          style={{ margin: "4rem auto" }}
          heading="About Us"
          subheading="Financial Benefits Insurance"
          text="We are a little old fashioned, if you want something done quickly, we will do everything we can to assist. Customer service is of paramount importance to us. Our customers recommend us to their friends. Our expertise is based on well-trained experienced staff that can tailor a comprehensive insurance program for your specific needs. You will have the added benefit of working with agents who understand your needs. Finding the right policy is only the beginning."
        />
        <BackgroundImage
          Tag="section"
          className="bg-hero"
          fluid={image.bg.childImageSharp.fluid}
          backgroundColor={`#ffffff`}
        >
          <div style={{ marginBottom: "0" }} className="login">
            <Fifty
              style={{ margin: "4rem auto" }}
              heading="Agent Portal"
              subheading="Financial Benefits Insurance"
            >
              <Button>
                Sign In <FaArrowCircleRight />
              </Button>
            </Fifty>
          </div>
        </BackgroundImage>
      </IndexWrapper>
    </Layout>
  )
}

const IndexWrapper = styled.div`
  .BannerContainer {
    position: absolute;
    z-index: 3;
    top: 18%;
  }
  .buttonContainer {
    display: flex;
    flex-wrap: wrap;
  }
  .login {
    padding: 4rem 0rem;
    margin-bottom: 4rem;
    color: var(--white);
    h4 {
      color: var(--white);
    }
  }
  .bg-hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
  .login Button {
    padding: 1rem 2rem;
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-content: center;
    margin: 0rem auto;
    .BannerContainer {
      top: 12%;
    }
    .buttonContainer a {
      margin: 0rem auto;
    }
    .login Button {
      margin: 1rem 0rem 0rem 0rem;
    }
  }
`

export default IndexPage
