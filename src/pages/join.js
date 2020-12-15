import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import Logos from "../components/globals/footer/Logos"

const JoinPage = () => {
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
          title="Join Us"
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
            <BannerPage title="Join Us" />
          </Section>
        </BackgroundImage>
        <Section style={{ margin: "4rem auto" }}>
          <h4 style={{ marginBottom: "2rem", color: "var(--mainColor)" }}>
            Why Do Business With Financial Benefits Insurance:
          </h4>
          <p>
            Our passion is working with agents who want to grow their book of
            business, grow their knowledge, and make themselves and their
            communities better. We are constantly growing and improving and we
            want agents to do the same with commitment and integrity. Financial
            Benefits Insurance is always looking for a few choice agents who
            want to be part of our team.
          </p>
          <p>
            Our agents are different because they make a difference. They are
            not only committed and dedicated in the marketplace but they are
            knowledgeable in Senior care and needs. Our agents are Senior
            resource centers. We take great pride in helping our Kupuna make the
            choice that best fits them. Our motto is “Medicare is our business;
            Service sets us apart”.
          </p>
          <p>
            We have set Training Meetings also called Team Meetings 9AM HST
            every Monday. These meetings are held in our 16 person Training Room
            and can be viewed virtually on GoToMeeting. These meetings are also
            recorded and archived for agents to view. Agents must stay current
            and engaged as they grow their business in a compliant manner.
          </p>
          <p>
            We also have New Agent Training Meetings 3PM HST Fridays. These
            meetings are also recorded and archived. We are the agency that
            trains and trains. We also have a big Agent Training Library. Agents
            gain Medicare knowledge quickly. Most of our agents are trained from
            the bottom up. We train them after they pass the Hawaii State
            Licensing Exam. Yes, we pride ourselves in training the rookies of
            the business and watch them grow.
          </p>
          <p>
            Currently one of our training focuses is virtual presentations and
            electronic signatures. There are many people who do not want to meet
            face to face. Agents need to communicate via FaceTime, ZOOM,
            GoToMeeting, WebEx, etc. COVID-19 pandemic has changed the way we do
            business. Another training focus is Social Media marketing. It’s a
            new world out there in the Medicare marketplace. Who would believe
            43% of people over age 65 use telemedicine and 76% over age 65 are
            either doing it or willing to do telemedicine? Times are changing
            and as agents we must also change. Before this coronavirus pandemic,
            agents had a difficult time with electronic enrollments but now they
            see it as a blessing.{" "}
          </p>
          <p>
            With 10 years in the Senior market, Financial Benefits Insurance has
            established a reputation for honesty and integrity with our agents
            and carriers. We do what we say we are going to do and don’t cut
            corners for our own short-term gain. Honesty and integrity are the
            top two characteristics we look for in our agents. Join us as we
            celebrate 10 years of growth, expansion, and innovation.
          </p>
          <p>
            We help our agents succeed before, during, and after the sale by
            providing them access to quality products that promote consumer
            health and well-being. Financial Benefits Insurance provides
            customized and back office support to our agents. Our office manager
            and two administrative assistants are agent advocates and their main
            focus is agent and client service.{" "}
          </p>
          <p>
            We are dedicated to:
            <ul className="list-style">
              <li>Do our best in helping agents make money</li>
              <li>Do our best in helping agents grow their book of business</li>
              <li>Help agents leverage their time</li>
            </ul>
          </p>
          <p>
            Financial Benefits Insurance is family owned and family minded. We
            have a compassionate culture. Work at a place where you know you
            belong. We care about each other and have a lot of fun along the
            way. We have lots of contests, get togethers, and dinners. We also
            believe spouses play a big part in our agents' growth and success
            and we welcome them as part of our Ohana. We believe Financial
            Benefits Insurance No Ka Oi.
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
  .list-style {
    padding-left: 3rem;
    li {
      margin: 0rem;
    }
  }
`

export default JoinPage
