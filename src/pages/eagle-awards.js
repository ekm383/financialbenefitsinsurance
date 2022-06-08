import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import Photo from "../images/fbihi-eagle-awards-2021.jpg"
import NikkiPhoto from "../images/agents/FBI-Nikki-Kida.jpg"
import DamienPhoto from "../images/agents/FBI-Damien-Morales.jpg"
import KamakaPhoto from "../images/agents/FBI-Kamaka-Jingao-2.jpg"
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
            <BannerPage title="Awards and Distinctions" />
          </Section>
        </BackgroundImage>

        <Section style={{ margin: "4rem auto" }}>
          <h4 style={{ marginBottom: "0rem", color: "var(--mainColor)" }}>
            EAGLE AWARD HALL OF FAME
            <img className="eagle-awards" src={Photo} alt="ed" />
          </h4>
          <p>
            <strong>
              We proudly present Financial Benefits Insurance outstanding
              Medicare Eagle Hall of Fame recipients for 2021.
            </strong>
          </p>

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

        <Section style={{ margin: "4rem auto" }}>
          <div>
            <p>
              <strong>NATIONAL SOCIAL SECURITY ADVISOR</strong>
            </p>
            <p>
              NSSA is the only Accredited Social Security Certificate program in
              the nation. The NSSA Certificate is the industry standard that
              signals colleagues and clients that NSSA are able to provide them
              with thoughtful, strategic and expert advice regarding
              maximization of Social Security filings.
            </p>
            <p>
              The knowledge obtained through NSSA Certificate Program, in
              conjunction with adherence to the NSSA standards of excellence,
              continuing education, and access to ongoing support, enables those
              who earn the Certificate to perpetually stay at the top of their
              game for Social Security consulting. The NSSA program focuses
              solely on Social Security education and incorporate client and
              advisor experiences. This program also emphasizes Situational
              Social Security as all clients are unique.
            </p>
            <p>
              The 78 million baby boomers maturing into Social Security are
              seeking not just financial stability they are also seeking peace
              of mind. They don't want to leave benefits on the table. The NSSA
              will help clients achieve their objectives.
            </p>
            <img src={NikkiPhoto} alt="Yucong “Nikki” Fan" width="200" /> <br />
            <p>
              Yucong “Nikki” Fan <br />
              National Social Security Advisor
            </p>
            <img src={DamienPhoto} alt="Damien Morales" width="200" /> <br />
            <p>
              Damien Morales <br />
              National Social Security Advisor
            </p>
          </div>
        </Section>

        <Section style={{ margin: "4rem auto" }}>
          <div>
            <p>
              <strong>THE SOCIETY OF CERTIFIED SENIOR ADVISOR</strong>
            </p>
            <p>
              The Certified Senior Advisor (CSA) is the leading certification
              for professionals serving older adults and is a designation
              awarded to qualified individuals. The CSA certification validates
              and gives confidence to both CSA professionals and the clients
              they serve.
            </p>
            <p>
              Earning the CSA certification requires individuals to pass a
              rigorous exam and to uphold the highest ethical standards for the
              benefit and protection of the health and welfare of Seniors. CSAs
              are multiple disciplinary professionals who have demonstrated
              advanced knowledge in the multiple processes of aging.
            </p>
            <p>
              Certified Senior Advisors (CSAs) understand how to build effective
              relationships with seniors because they have a broad-based
              knowledge of the health, social, and financial issues that are
              important to seniors and the dynamics of how these factors work
              together in seniors' lives.{" "}
            </p>
            <img src={KamakaPhoto} alt="Kamaka Jingao" width="200" /> <br />
            <p>
              Kamaka Jingao <br />
              Certified Senior Advisor
            </p>
          </div>
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
