import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import Logos from "../components/globals/footer/Logos"

const OurVisionPage = () => {
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
      <StyledStory>
        <SEO
          title="Our Story"
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
            <BannerPage title="Our Vision" />
          </Section>
        </BackgroundImage>

        <Section style={{ margin: "4rem auto" }}>
          <h4 style={{ marginBottom: "2rem", color: "var(--mainColor)" }}>
            OUR VISION
          </h4>
          <p>
            <strong>MISSION: </strong>Help Kupuna (Seniors) find peace of mind
            in the communities we serve. We believe Seniors deserve to live
            healthier productive lives. We want everyone get more from life.
            <br />
            <br />
            <strong>MOTTO: </strong>"Do the right thing. Always"
            <br />
            <br />
            <strong>SLOGAN: </strong>"Benefits are our business, Service sets us
            apart"
            <br />
            <br />
            <strong>PRINCIPLE: </strong>We believe "No one plan is good for
            everyone. Everyone has different wants and needs. Everyone has
            different medical conditions. Everyone has different financial
            situations. Everyone is different".
            <br />
            <br />
            <strong>GOAL: </strong>"Find honest agents with integrity and train
            them in Medicare health options and Insurance so clients are
            comfortable inviting them to their homes. Build relationships. Build
            trust. Make Seniors feel welcomed, comfortable, and engaged".
          </p>
        </Section>
      </StyledStory>
      <Logos />
    </Layout>
  )
}

const StyledStory = styled.div`
  .generation {
    width: 100%;
    margin: 2rem auto;
  }
  .bg-hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
`

export default OurVisionPage
