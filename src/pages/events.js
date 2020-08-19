import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"

const EventsPage = () => {
  const image = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "background/fbihi-bg-04.jpg" }) {
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
      <StyledEvents>
        <SEO
          title="Events"
          description="We are an independent insurance agency. We do not work for an insurance company; we work for you!`,
      author: `@financialbenefitsinsurance"
          keywords={[
            `Hawaii Term Life Insurance`,
            `Hawaii Medicare Supplements`,
            `Hawaii Medicare Advantage`,
            `Hawaii Health Insurance`,
          ]}
        />
        <BackgroundImage
          Tag="section"
          className="bg-hero"
          fluid={image.bg.childImageSharp.fluid}
          backgroundColor={`#ffffff`}
        >
          <Section style={{ width: "100vw", alignItems: "center" }}>
            <BannerPage title="Events" />
          </Section>
        </BackgroundImage>
      </StyledEvents>
    </Layout>
  )
}

const StyledEvents = styled.div`
  .bg-hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
`

export default EventsPage
