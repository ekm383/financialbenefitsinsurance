import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import Photo from "../images/fbihi-eagle-awards-2021.jpg"
import Logos from "../components/globals/footer/Logos"

const EagleAwardsPage = () => {
  const image = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "background/fbihi-bg-05.jpg" }) {
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
          title="Eagle Award Hall of Fame"
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
            <BannerPage title="Eagle Award Hall of Fame" />
          </Section>
        </BackgroundImage>

        <Section style={{ margin: "4rem auto" }}>
          <h4 style={{ marginBottom: "2rem", color: "var(--mainColor)" }}>
            EAGLE AWARD HALL OF FAME
            <img className="eagle-awards" src={Photo} alt="ed" />
          </h4>

          <p>
            <strong>
              We proudly present Financial Benefits Insurance outstanding
              Medicare Eagle Hall of Fame recipients for 2021.
            </strong>
          </p>
          <br />
          <p>
            These 11 exceptional licensed sales agents by virtue of their sales,
            success, and selfless service are recognized for their achievements.
            They inspire other agents by their example, confidence in
            leadership, commitment, and integrity.{" "}
          </p>
          <p>
            The Eagle Hall of Fame awards were established by Financial Benefits
            Insurance in 2017 as a means of expressing our desire to recognize
            leaders of our team. The program, now in its 5th consecutive year,
            benefits the Senior community in service and education.
          </p>
        </Section>
      </StyledStory>
      <Logos />
    </Layout>
  )
}

const StyledStory = styled.div`
  .eagle-awards {
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

export default EagleAwardsPage
