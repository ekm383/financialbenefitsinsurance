import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const TestimonialsPage = () => {
  const image = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "background/fbihi-bg-03.jpg" }) {
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
      <Wrapper>
        <SEO
          title="Testimonials"
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
            <BannerPage title="Testimonials" />
          </Section>
        </BackgroundImage>
        <Section style={{ padding: "3rem 0rem" }}>
          <div className="box">
            <p>
              <FaQuoteLeft className="left" />I was glad to run into you at
              Safeway last week as I had been thinking about updating you on how
              happy I have been with the Medicare Supplement Plan...that you
              enrolled me in last open enrollment period. Since moving to
              Hawaii, I had to establish relationships with a new primary care
              physician as well as an orthopedic specialist for my knees. I have
              had several appointments and procedures and the insurance has
              worked as you explained it would. I was a bit skeptical as coming
              from Nevada, insurance never worked for me as promised. Thank you
              again for assisting me in finding the plan that would be best for
              my needs and budget.
            </p>
            <p>
              I will be contacting you again during open enrollment to upgrade
              my Part D plan from my current...Plan. Now that I see what my
              prescriptions needs are, I think I would like a little more
              comprehensive plan.
              <FaQuoteRight className="right" />
            </p>
            <p className="name">- Pam L. | Honolulu, HI</p>
          </div>
          <div className="box">
            <p>
              <FaQuoteLeft className="left" />
              Kamaka Jingao has been a wonderful agent. He is always quick to
              respond to my questions and concerns. He looks out for my best
              interest. I have referred many people to Kamaka. Thank you for
              your help!
              <FaQuoteRight className="right" />
            </p>
            <p className="name">- Jeanette P. | Kaneohe, HI</p>
          </div>
          <div className="box">
            <p>
              <FaQuoteLeft className="left" />
              It has been an extreme pleasure having Kamaka Jingao, from
              Financial Benefits Insurance, as my Medicare Insurance agent. His
              level of service and professionalism is unparalleled. I would
              HIGHLY recommend Kamaka to anyone!
              <FaQuoteRight className="right" />
            </p>
            <p className="name">- Abby P. | Pearl City, HI</p>
          </div>
          <div className="box">
            <p>
              <FaQuoteLeft className="left" />
              I am very happy with my insurance plan and owe it all to you
              (Brenda Takahashi). I appreciate you keeping in contact. You're
              great!
              <FaQuoteRight className="right" />
            </p>
            <p className="name">- Lorraine T. | Honolulu, HI</p>
          </div>
          <div className="box">
            <p>
              <FaQuoteLeft className="left" />
              I have received excellent services from Brenda KWP Takahashi. She
              has keep me informed and knows her products. Brenda is a wonderful
              person.
              <FaQuoteRight className="right" />
            </p>
            <p className="name">- Kenrick C. | Honolulu, HI</p>
          </div>
          <div className="box">
            <p>
              <FaQuoteLeft className="left" />
              Ed Motosue has given me and my late husband superior service -
              very informative and patient. My late husband was an insurance
              agent and when Mr. Motosue approached us, my husband was very
              skeptical regarding Medicare Advantage plans, but after Mr.
              Motosue spent time with us he became a believer and thought that
              Mr. Motosue's service was excellent! After that we have been with
              Mr. Motosue over eight years and I will never change agents
              <FaQuoteRight className="right" />
            </p>
            <p className="name">- Audrey M. | Honolulu, HI</p>
          </div>
        </Section>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  .bg-hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
  .box {
    margin: 1rem auto;
  }
  p {
    margin: 1rem auto;
  }
  .name {
    font-weight: 700;
  }
  hr {
    width: 100%;
    color: var(--lightGray);
    margin: 0rem auto;
  }
  svg {
    color: var(--mainColor);
  }
  .left {
    margin-right: 0.5rem;
  }
  .right {
    margin-left: 0.5rem;
  }
`

export default TestimonialsPage
