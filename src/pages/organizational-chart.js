import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import Logos from "../components/globals/footer/Logos"
import OrgChart from "../images/FBI-Organizational-Chart-2023-02-01.jpg"

const OrganizationalPage = () => {
  const data = useStaticQuery(graphql`
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
      <StyledChart>
        <BackgroundImage
          Tag="section"
          className="bg-hero"
          fluid={data.bg.childImageSharp.fluid}
          backgroundColor={`#ffffff`}
        >
          <Section style={{ width: "100vw", alignItems: "center" }}>
            <BannerPage title="Organizational Chart" />
          </Section>
        </BackgroundImage>
        <Section style={{ margin: "4rem auto" }}>
          <img
            className="organizational-chart"
            src={OrgChart}
            alt="Organizational Chart"
          />
        </Section>

        <Logos />
      </StyledChart>
    </Layout>
  )
}

const StyledChart = styled.div`
  .bg-hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }

  .organizational-chart {
    width: 100%;
    margin: 2rem auto;
  }

  @media (max-width: 768px) {
    .card-container {
      .box {
        flex-basis: 100%;
      }
    }
  }
`

export default OrganizationalPage
