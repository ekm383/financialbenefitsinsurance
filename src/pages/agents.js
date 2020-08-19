import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import Search from "../components/Search"

const AgentsPage = () => {
  const image = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "background/fbihi-bg-08.jpg" }) {
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
      <SEO
        title="Agents"
        description="We are an independent insurance agency. We do not work for an insurance company; we work for you!`,
      author: `@financialbenefitsinsurance"
        keywords={[
          `Hawaii Term Life Insurance`,
          `Hawaii Medicare Supplements`,
          `Hawaii Medicare Advantage`,
          `Hawaii Health Insurance`,
        ]}
      />
      <StyledAgents>
        <BackgroundImage
          Tag="section"
          className="bg-hero"
          fluid={image.bg.childImageSharp.fluid}
          backgroundColor={`#ffffff`}
        >
          <Section style={{ width: "100vw", alignItems: "center" }}>
            <BannerPage title="Agents" />
          </Section>
        </BackgroundImage>
        <Section style={{ width: "80vw", padding: "3rem 0rem" }}>
          <Search />
        </Section>
      </StyledAgents>
    </Layout>
  )
}

const StyledAgents = styled.div`
  .bg-hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
`

export default AgentsPage
