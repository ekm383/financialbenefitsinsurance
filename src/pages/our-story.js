import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"

const OurStoryPage = () => {
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
            <BannerPage title="Our Story" />
          </Section>
        </BackgroundImage>
        <Section style={{ margin: "4rem auto" }}>
          <h4 style={{ marginBottom: "2rem", color: "var(--mainColor)" }}>
            Planning for the future:
          </h4>
          <p>
            “Expanding our position in the Medicare marketplace is crucial. If
            you don’t, you are going to get rolled over by the big guys”. If you
            don’t expand you cannot help the many Seniors who need help. If you
            don’t help the Seniors navigate Medicare no one else will. Seniors
            need agents who are knowledgeable, caring, and trustworthy.
          </p>
          <p>
            Do you want to own the marketplace or are you happy with your market
            share? Studies shows if you stop innovation and creativity, a
            business entity will eventually die a slow death because competition
            is improving and trying to do better. You need to be ahead of the
            wave and this takes vision and planning. Are there risks involved?
            Yes. But through “organization and preparation for every needful
            thing”, risks can be nominal. Financial Benefits Insurance has
            surged ahead and taken advantage of business opportunities and
            growth even during economic turmoil.
          </p>
          <p>
            Restructuring and re-evaluating goals in times of economic turmoil
            is a fight for survival. Where does a business want to be in 1 year?
            5 years? 10 years? Does the business entity want to be a player or
            spectator?{" "}
          </p>
          <p>
            “10 years of growth, expansion, and innovation” Travis Motosue and
            Ed Motosue started Financial Benefits Insurance in August 2010 with
            two Medicare carriers (United Healthcare and Humana). In 2018 their
            agency contracted with WellCare (Ohana Health) and AlohaCare in
            2019. Currently Financial Benefits Insurance has United Healthcare,
            Humana, Centene (WellCare, Ohana Health), AlohaCare, Aetna
            (SilverScripts), CIGNA, TransAmerica, United American, and Mutual of
            Omaha as part of their Medicare carrier family.{" "}
          </p>
          <p>
            In 2016 Financial Benefits Insurance changed their marketing
            strategy to expand to the Neighbor Islands and expand into the
            ethnic speaking markets (Chinese, Korean, Filipino) on Oahu. They
            also entered the DSNP (Dual Special Needs Plan) marketplace and set
            up retail kiosks in Walmart stores for AEP (Annual Election Period)
            and OEP (Open Enrollment Period). In 2017 Financial Benefits
            Insurance tripled their 2016 sales revenue and have been on the
            upclimb every year. Last year 2019 was a banner year as Financial
            Benefits Insurance ran on all 4 cylinders. Training, training,
            training. Their agents are among the most knowledgeable in the
            Medicare marketplace.
          </p>
          <p>
            From 3 agents in Aug 2010, Financial Benefits Insurance currently
            has 50 agents servicing Oahu, Maui, Kauai, and Big Island. In
            February 2011, they moved into their first office at 1311 Kapiolani
            Blvd., suite 504. The office consisted of a Conference Room,
            reception area and two rooms. In 2016 Financial Benefits Insurance
            nearly doubled the size of their Honolulu office from 823 sq ft to
            1,353 sq ft and built a Training Room and agent workstations. In
            July 2019 Travis and Ed opened a 680 sq ft office in Hilo at 1289
            Kilauea Ave, suite G to support their Hilo agents. In March 2020
            they renovated their Honolulu office by installing vinyl wood
            flooring, glass interior doors, and building another Appointment
            Room. In June 2020 Travis and Ed leased 369 sq ft in Seafood City
            Waipahu for a Waipahu Community Office. Financial Benefits Insurance
            agents are among the most dedicated and engaged in serving our
            community.{" "}
          </p>
          <p>
            Travis and Ed are currently updating their Webpage for the 3rd time
            to keep up with the new changes and making it more client friendly.
            In April 2020 they introduced a CRM system to their office staff and
            agents. CRM is a client relationship management system. Agents not
            only record the communications with their clients but have a
            timeline for every relationship building contact. Financial Benefits
            Insurance is the fist Medicare agency in Hawaii to utilize a CRM
            system.
          </p>
          <p>
            In these challenging times with the COVID-19 pandemic, the office is
            a safe office. The Financial Benefits Insurance office has 3 large
            plexi-glass cough shields; one at the reception desk and the other
            two in the Appointment Rooms. Hand sanitizers are readily available
            in all rooms. Desks, tables, chairs and door knobs are disinfected
            regularly. Face shields and face masks are available and offered to
            clients upon entry.{" "}
          </p>
          <p>
            Time surely flies when you are helping Seniors and having fun.
            Financial Benefits Insurance is blessed with compassionate agents
            who are committed and dedicated to help Seniors.
          </p>
        </Section>
      </StyledStory>
    </Layout>
  )
}

const StyledStory = styled.div`
  .bg-hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
`

export default OurStoryPage
