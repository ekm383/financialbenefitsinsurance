import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import Logos from "../components/globals/footer/Logos"
import Photo1 from "../images/FBI-Get-All-Of-This-1.jpg"

const GetAllOfThisPage = () => {
  const image = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "background/fbihi-bg-13.jpg" }) {
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
          title="Get All Of This"
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
            <BannerPage title="Get All of This and More" />
          </Section>
        </BackgroundImage>
        <Section style={{ margin: "2rem auto" }}>
          <h4 style={{ marginBottom: "2rem", color: "var(--mainColor)" }}>
            <img
              className="get-all-of-this-1"
              src={Photo1}
              alt="get-all-of-this-1"
            />
            Get All of This and More
          </h4>
          <p>
            Although agents are 1099 (free and independent contractors) we offer
            many benefits:
            <br />
            <br />
            <strong>
              1. Business Cards <br />
              2. Green Mailer Cards <br />
              3. Personal Flyers <br />
              4. Formal Venue Fees <br />
              5. CRM System <br />
              6. 50-50 Co-Op Advertising <br />
              7. Thank You Cards/Stamps <br />
              8. Birthday Cards/Stamps <br />
              9. Quoting Tools <br />
              10. Leads{" "}
            </strong>
            <br />
            <br />
            We want agents to concentrate their efforts in growing their Book of
            Business.
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
  .get-all-of-this-1 {
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

export default GetAllOfThisPage
