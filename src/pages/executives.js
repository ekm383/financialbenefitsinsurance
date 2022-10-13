import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import Logos from "../components/globals/footer/Logos"

const ExecutivesPage = () => {
  const data = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "background/fbihi-bg-13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      dana: file(relativePath: { eq: "agents/FBI-Dana-Higa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      erline: file(relativePath: { eq: "agents/FBI-Erline-Shiraki.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mary: file(relativePath: { eq: "agents/FBI-Maryann-Ancog.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      laura: file(relativePath: { eq: "agents/FBI-Laura-Ajimine.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <StyledExecutives>
        <BackgroundImage
          Tag="section"
          className="bg-hero"
          fluid={data.bg.childImageSharp.fluid}
          backgroundColor={`#ffffff`}
        >
          <Section style={{ width: "100vw", alignItems: "center" }}>
            <BannerPage title="Office Staff" />
          </Section>
        </BackgroundImage>
        <Section style={{ margin: "4rem auto 0rem auto" }}>
          <iframe
            title="About FBIHI"
            src="https://player.vimeo.com/video/467002224"
            width="100%"
            height="360"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </Section>
        <Section
          style={{ width: "90vw", alignItems: "center", margin: "2rem auto" }}
        >
          <div className="card-container">
            <h4 className="executives-header">Office Staff</h4>
            <div className="box">
              <div className="avatar">
                <Img fluid={data.dana.childImageSharp.fluid} />
              </div>
              <div className="name">
                <p className="agent-name">Dana Higa-Rolls Emerick</p>
                <p className="website-link">
                  Manager of Marketing and Administration
                </p>
              </div>
            </div>
            <div className="box">
              <div className="avatar">
                <Img fluid={data.erline.childImageSharp.fluid} />
              </div>
              <div className="name">
                <p className="agent-name">Erline Shiraki</p>
                <p className="website-link">
                  Agent Advocate and Service Coordinator 
                </p>
              </div>
            </div>
            <div className="box">
              <div className="avatar">
                <Img fluid={data.mary.childImageSharp.fluid} />
              </div>
              <div className="name">
                <p className="agent-name">Maryann Ancog</p>
                <p className="website-link">
                  Client Retention and Service Coordinator
                </p>
              </div>
            </div>
            <div className="box">
              <div className="avatar">
                <Img fluid={data.laura.childImageSharp.fluid} />
              </div>
              <div className="name">
                <p className="agent-name">Laura Ajimine</p>
                <p className="website-link">
                  Provider Service and Customer Service Coordinator
                </p>
              </div>
            </div>
          </div>
        </Section>
        <Section style={{ margin: "4rem auto 2rem auto" }}>
          <iframe
            title="About FBIHI"
            src="https://player.vimeo.com/video/467002085"
            width="100%"
            height="360"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </Section>

        <Logos />
      </StyledExecutives>
    </Layout>
  )
}

const StyledExecutives = styled.div`
  .bg-hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
  .card-container {
    width: 100%;
    margin: 0rem auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    .executives-header {
      width: 100%;
      margin: 3rem auto;
      font-style: italic;
      font-size: 2rem;
      color: var(--mainColor);
    }
    .box {
      display: flex;
      flex-basis: 50%;
      margin-bottom: 1.5rem;
      p {
        margin-bottom: 0rem;
      }
    }
    .avatar {
      width: 40%;
    }
    .name {
      width: 60%;
      padding: 10px;
      background-color: var(--mainColor);
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        line-height: 1.5rem;
      }
      .agent-name {
        font-weight: bold;
      }
    }
  }
  @media (max-width: 768px) {
    .card-container {
      .box {
        flex-basis: 100%;
      }
    }
  }
`

export default ExecutivesPage
