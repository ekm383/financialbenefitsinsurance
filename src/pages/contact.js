import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BannerPage from "../components/globals/banner/BannerPage"
import BackgroundImage from "gatsby-background-image"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"
import Logos from "../components/globals/footer/Logos"

const ContactPage = () => {
  const image = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "background/fbihi-bg-06.jpg" }) {
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
      <StyledContact>
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
        <BackgroundImage
          Tag="section"
          className="bg-hero"
          fluid={image.bg.childImageSharp.fluid}
          backgroundColor={`#ffffff`}
        >
          <Section style={{ width: "100vw", alignItems: "center" }}>
            <BannerPage title="Contact Us" />
          </Section>
        </BackgroundImage>
        <Section style={{ margin: "4rem auto 0rem auto" }}>
          <ContactForm />
        </Section>
      </StyledContact>
      <Logos />
    </Layout>
  )
}

const StyledContact = styled.div`
  .bg-hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
`

export default ContactPage
