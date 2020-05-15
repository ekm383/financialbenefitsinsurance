import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import styled from 'styled-components'
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import { FaArrowCircleRight } from 'react-icons/fa'
import Fifty from "../components/globals/section/Fifty"
import Background from '../components/globals/header/Background'

const IndexPage = () => (
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
        <Section style={{ height: "100vh", width: "100vw" }}>
          <Banner titleSmall="Welcome to Financial Benefits Insurance" title="BENEFITS ARE OUR BUSINESS. SERVICE SETS US APART.">
            <div className="buttonContainer">
              <AniLink fade to="/services">
                <Button>VIEW OUR SERVICES<FaArrowCircleRight /></Button>
              </AniLink>
              <a href="https://travismotosue.zohobookings.com">
                <Button>BOOK APPOINTMENT<FaArrowCircleRight /></Button>
              </a>
            </div>
          </Banner>
        </Section>
      </HeaderIndex>
      <Fifty
        style={{ margin: "4rem auto" }}
        heading="about us"
        subheading="financial benefits insurance"
        text="We are a little old fashioned, if you want something done quickly, we will do everything we can to assist. Customer service is of paramount importance to us. Our customers recommend us to their friends. Our expertise is based on well-trained experienced staff that can tailor a comprehensive insurance program for your specific needs. You will have the added benefit of working with agents who understand your needs. Finding the right policy is only the beginning."
      />
      <Background>
        <div className="login">
          <Fifty
            style={{ margin: "4rem auto" }}
            heading="agent login"
            subheading="financial benefits insurance"
          >
            <Button>SIGN IN <FaArrowCircleRight /></Button>
          </Fifty>
        </div>
      </Background>
    </IndexWrapper>
  </Layout>
)

const IndexWrapper = styled.div`
  .buttonContainer {
    display: flex;
    flex-wrap: wrap;
  }
  .login {
    padding: 4rem 0rem;
    color: var(--white);
    h4 {
      color: var(--white);
    }
  }
  .login Button {
    padding: 1rem 2rem;
  }
  @media (max-width: 768px) {
    justify-content: center;
    align-content:center;
    margin: 0rem auto;
    .buttonContainer a {
      margin: 0rem auto;
    }
    .login Button {
    margin: 1rem 0rem 0rem 0rem;
  }
  }
`

export default IndexPage
