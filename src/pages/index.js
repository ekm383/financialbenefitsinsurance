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
      text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    />
  </Layout>
)

export default IndexPage
