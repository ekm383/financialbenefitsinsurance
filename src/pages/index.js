import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import { FaAngleRight } from 'react-icons/fa'
import Fifty from "../components/globals/section/Fifty"

const IndexPage = () => (
  <Layout>
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
          <AniLink fade to="#menu">
            <Button>LEARN MORE <FaAngleRight /> </Button>
          </AniLink>
        </Banner>
      </Section>
    </HeaderIndex>

    <Fifty
      style={{ margin: "4rem auto" }}
      heading="about us"
      subheading="financial benefits insurance"
      text="We are a little old fashioned, if you want something done quickly, we will do everything we can to assist. Customer service is of paramount importance to us. Our customers recommend us to their friends. Our expertise is based on well-trained experienced staff that can tailor a comprehensive insurance program for your specific needs. You will have the added benefit of working with agents who understand your needs. Finding the right policy is only the beginning."
    />
  </Layout>
)

export default IndexPage
