import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import Logos from "../components/globals/footer/Logos"
import Photo1 from "../images/FBI-What-Separates-Us-1.jpg"

const WhatSeparatesUsPage = () => {
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
          title="What Separates Us"
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
            <BannerPage title="What Separates Us From the Field" />
          </Section>
        </BackgroundImage>
        <Section style={{ margin: "2rem auto" }}>
          <h4 style={{ marginBottom: "2rem", color: "var(--mainColor)" }}>
            <img
              className="what-separates-us-1"
              src={Photo1}
              alt="what-separates-us-1"
            />
            What Separates Us From the Field
          </h4>

          <p>
            <strong>
              1. Care <br />
              2. Service <br />
              3. Training
            </strong>
          </p>

          <p>
            We genuinely care for Seniors well being and quality of life. We
            help educate Seniors on their Medicare options. No one plan is good
            for everyone. Everyone has different wants and needs. Everyone has
            different medical conditions. Everyone has different financial
            situations. We help them find the plan that best fits their needs.
          </p>
          <p>
            Advancements in medical technology and medication help Seniors live
            longer. But what good is living longer if you are bed ridden.
            Quality of life becomes more important as we get older. Seniors need
            to know and use all the benefits in their plan. Thru client
            appreciation meetings (Member Orientation in January and Annual
            Notification of Change in October), we review and remind members how
            to use their plan which include annual wellness visit, preventive
            screenings, and prescription mail orders. We also send members
            e-mails, Thank You cards, and birthday cards. We want our members
            connected and engaged.
          </p>
          <p>
            Our agents are the most knowledgeable agents in the Medicare
            marketplace. Thru our Monday Team meetings, Friday Medicare
            trainings, and Q&A virtual meetings, our agents have set training
            meetings which are all recorded and archived.  We have an extensive
            agent training library.
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
  .what-separates-us-1 {
    width: 100%;
    margin: 2rem auto;
  }

  .bg-hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
  .list-style {
    padding-left: 3rem;
    li {
      margin: 0rem;
    }
  }
`

export default WhatSeparatesUsPage
