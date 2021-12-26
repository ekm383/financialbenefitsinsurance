import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import { FaArrowCircleRight } from "react-icons/fa"
import Fifty from "../components/globals/section/Fifty"
import BackgroundImage from "gatsby-background-image"
import OahuPhotos from "../components/officePhotos/OahuPhotos"
import HiloPhotos from "../components/officePhotos/HiloPhotos"
import WaipahuPhotos from "../components/officePhotos/WaipahuPhotos"
import Logos from "../components/globals/footer/Logos"

const IndexPage = () => {
  const image = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "background/fbihi-bg-02.jpg" }) {
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
          <div className="banner-container">
            {/* <Banner
              titleSmall="Welcome to Financial Benefits Insurance"
              title="Benefits are our business."
              title2="Service sets us apart."
            ></Banner> */}
          </div>
        </HeaderIndex>
        <Fifty
          style={{ margin: "4rem auto" }}
          heading="About Us"
          subheading="Financial Benefits Insurance"
          text="We are a little old fashioned, if you want something done quickly, we will do everything we can to assist. Customer service is of paramount importance to us. Our customers recommend us to their friends. Our expertise is based on well-trained experienced staff that can tailor a comprehensive insurance program for your specific needs. You will have the added benefit of working with agents who understand your needs. Finding the right policy is only the beginning."
        />
        <Section style={{ width: "80vw", margin: "4rem auto 4rem auto" }}>
          <div className="photo-header">
            <h6>Honolulu Kapiolani Office</h6>
            <p>1311 Kapiolani Blvd. Ste. 504 Honolulu, HI 96814</p>
          </div>
          <OahuPhotos />
        </Section>
        <Section style={{ width: "80vw", margin: "4rem auto" }}>
          <div className="photo-header">
            <h6>Big Island Hilo Office</h6>
            <p>1289 Kilauea Ave. Hilo, HI  96720</p>
          </div>
          <HiloPhotos />
        </Section>
        <Section style={{ width: "80vw", margin: "4rem auto" }}>
          <div className="photo-header">
            <h6>Waipahu Community Office</h6>
            <p>94-050 Farrington Hwy Waipahu, HI 96797</p>
          </div>
          <WaipahuPhotos />
        </Section>
        <BackgroundImage
          Tag="section"
          className="bg-hero"
          fluid={image.bg.childImageSharp.fluid}
          backgroundColor={`#ffffff`}
        >
          <div style={{ marginBottom: "0" }} className="login">
            <Fifty
              style={{ margin: "4rem auto" }}
              heading="Service Portal"
              subheading="Financial Benefits Insurance"
            >
              <div className="portal-buttons">
                <a href="http://143.198.57.71">
                  <Button>
                    Agent Portal <FaArrowCircleRight />
                  </Button>
                </a>
              </div>
            </Fifty>
          </div>
        </BackgroundImage>
      </IndexWrapper>
      <Logos />
    </Layout>
  )
}

const IndexWrapper = styled.div`
  .login {
    text-align: left;
    padding: 4rem 0rem;
    margin-bottom: 4rem;
    color: var(--white);
    h4 {
      color: var(--white);
    }
  }
  .banner-container {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 8%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 9000;
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
  .portal-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .photo-header {
    h6 {
      font-family: "Merriweather";
      font-style: italic;
      font-size: 1.8rem;
      margin: 0;
      color: var(--mainColor);
      text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.1);
    }
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-content: center;
    margin: 0rem auto;
    .banner-container {
      top: 8%;
    }
    .portal-buttons {
      justify-content: center;
    }
    .login {
      text-align: center;
    }
    .login Button {
      margin: 1rem 0rem 0rem 0rem;
    }
  }
`

export default IndexPage
