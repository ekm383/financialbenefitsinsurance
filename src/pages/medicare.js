import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import Logos from "../components/globals/footer/Logos"

const MedicarePage = () => {
  const image = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "background/fbihi-bg-02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image1: file(relativePath: { eq: "medicare/fbihi-medicare-01.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "medicare/fbihi-medicare-02.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image3: file(relativePath: { eq: "medicare/fbihi-medicare-03.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image4: file(relativePath: { eq: "medicare/fbihi-medicare-04.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image5: file(relativePath: { eq: "medicare/fbihi-medicare-05.jpg" }) {
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
          <BannerPage title="Medicare 101" />
        </Section>
      </BackgroundImage>
      <MedicareWrapper>
        <Section style={{ margin: "4rem auto 0rem auto" }}>
          <iframe
            src="https://player.vimeo.com/video/467002085"
            width="100%"
            height="360"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </Section>
        <Section style={{ margin: "4rem auto" }}>
          <div className="box">
            <h4>What is Medicare?</h4>
            <p>
              Medicare was enacted in 1965 under President Lyndon B. Johnson. It
              is a federal health insurance program for U.S. citizens and
              permanent legal residents.
            </p>
            <p>
              It is the largest healthcare payer in the United States, In fact,
              it covers over 60 million people. You become eligible for Medicare
              when you turn 65. You may also become eligible before you turn 65.
              This is usually due to having end-stage renal disease at any age,
              or also if you are under 65 with certain disabilities.
            </p>
            <p>
              Medicare offers basic insurance coverage. Therefore, it helps pay
              for things like doctor and emergency room visits, outpatient
              procedures, and hospital stays. The Centers for Medicare &
              Medicaid Services or CMS governs both Medicare and Medicaid. CMS
              is a branch of the Department of Health and Human Services (HHS).
            </p>
            <p>
              Medicare is made of two parts: Medicare Part A also known as
              hospital insurance, and Medicare Part B also known as medical
              insurance.
            </p>
          </div>
          <div className="box">
            <Img
              style={{ marginBottom: "2rem" }}
              fluid={image.image1.childImageSharp.fluid}
            />
            <h4>How is Medicare funded?</h4>
            <p>
              According to CMS, total medicare expenditures for 2017 totaled
              $705.9 billion. This is funded through two U.S. Treasury trust
              funds:
            </p>
            <ul>
              <li>
                Hospital Insurance Trust Fund: funds Part A as well as Medicare
                program administration. The trust is funded by payroll taxes,
                income taxes paid on social security benefits, interest earned
                on the fund’s investments, and Part A premiums from those that
                don’t qualify for free Part A.
              </li>
              <li>
                Supplementary Medical Insurance Trust Fund: funds Part B, Part
                D, and program administration. This trust is funded mostly by
                Part B and Part D premiums, funds that Congress authorizes, and
                trust fund earned interest.
              </li>
            </ul>
          </div>
          <div className="box">
            <Img
              style={{ marginBottom: "2rem" }}
              fluid={image.image2.childImageSharp.fluid}
            />
            <h4>When can I enroll?</h4>
            <p>
              You become eligible for Medicare when you Turn 65, are not 65 yet
              but have a qualifying disability, or have end stage renal disease.
            </p>
            <p>
              According to the 2020 Medicare & You Guidebook, the official U.S.
              Government Medicare Handbook, you will be automatically enrolled
              into Part A and Part B if:
            </p>
            <ul>
              <li>
                You’re already receiving benefits from Social Security or the
                Railroad Retirement Board (RRB).
              </li>
              <li>You’re under 65 with a disability.</li>
              <li>You have ALS (Lou Gehrig’s Disease).</li>
            </ul>
            <p>
              For everyone else, you wil need to sign up in order to receive
              Original Medicare. You may sign up during one of the enrollment
              periods.
            </p>
            <ul>
              <li>
                Initial Enrollment Period: This is a 7month period. It includes
                the 3 months before the month your turn 65, the month your turn
                65, and the 3 months after the month you turn 65.
              </li>
              <li>
                Special Enrollment Period: If you delayed signing up during your
                IEP, you may be eligible to sign up during a Special Enrollment
                Period.
              </li>
            </ul>
            <p>
              You may face a late enrollment penalty for Part B, or Part D if
              you are eligible and choose not to enroll during your initial
              enrollment period. Make sure you have creditable coverage if you
              are considering delaying enrollment for either parts.
            </p>
          </div>
          <div className="box">
            <Img
              style={{ marginBottom: "2rem" }}
              fluid={image.image3.childImageSharp.fluid}
            />
            <h4>When does my coverage start?</h4>
            <p>
              If you sign up before the month of your birthday, then your
              coverage will usually begin on the 1st of the month that you turn
              65. This also applies to you if you are auto-enrolled due to
              receiving benefits from social security or RRB. However, your
              coverage will begin on the 1st of the previous month of your
              birthday if your birthday is on the first of the month.
            </p>
            <ul>
              <li>
                Example 1: Bill is turning 65 July 20. He enrolls in Medicare
                within the 3 months before the month he turns 65. Bill’s
                coverage will start July 1st.
              </li>
              <li>
                Example 2: Suzie is turning 65 July 1st. She enrolls in Medicare
                within the 3 months before the month she turns 65. Suzie’s
                coverage will start June 1st.
              </li>
            </ul>
            <p>
              If you’re under 65 with a disability, your coverage will start
              after you receive Social Security disability benefits. This is
              also true if you receive some RRB disability benefits for at least
              24 months.
            </p>
            <p>
              If you have ALS (Lou Gehrig’s Disease), you’ll receive Medicare
              benefits the same month you start receiving Social Security
              disability benefits.
            </p>
          </div>
          <div className="box">
            <Img
              style={{ marginBottom: "2rem" }}
              fluid={image.image4.childImageSharp.fluid}
            />
            <h4>How to choose between A Supplement Plan or Advantage Plan</h4>
            <p>
              Choosing the right plan will be different for each person.
              Futhermore, it should be based on your individual financial and
              medical needs. It is not a one-size fits all approach.
            </p>
            <p>
              However, there are two main options that you will choose from. You
              can choose to have Original Medicare, which you can pair with a
              Supplement plan or you can choose an Advantage plan also known as
              Part C.
            </p>
            <p>
              If you choose Original Medicare, it will consist of Part A and
              Part B. This is also known as Traditional Medicare or
              Fee-for-Service (FFS) Medicare. It is governed by the Centers for
              Medicare and Medicaid Services (CMS). If you go this route, you
              will most likely need to choose a stand-alone Part D (Prescription
              Drug) plan.
            </p>
          </div>
          <div className="box">
            <Img
              style={{ marginBottom: "2rem" }}
              fluid={image.image5.childImageSharp.fluid}
            />
            <h3>TIP: CONTACT SOCIAL SECURITY</h3>
            <br />
            <div className="column">
              <div>
                <h6>With Original Medicare</h6>
                <br />
                <ul>
                  <li>
                    There are no networks. You can visit any doctor or hospital
                    that accepts Medicare. This applies anywhere in the country,
                    and without prior authorization from Medicare or from your
                    primary care doctor.
                  </li>
                  <li>
                    Medicare is your primary payer, therefore the government
                    pays directly for your claims.
                  </li>
                  <li>
                    You will typically pay a monthly premium for Part B. The
                    premium is $144.60 per month for most people in 2020.
                  </li>
                  <li>
                    Part A is free for most people if you have paid into social
                    security taxes for at least 40 quarters. Some people pay a
                    premium for Part A.
                  </li>
                  <li>
                    There are co-insurances, co-pays, and deductibles. Medigap
                    plans can help cover these costs.
                  </li>
                  <li>
                    There is no out of pocket limit if you only have Original
                    Medicare. This is where a supplement plan or advantage plan
                    can help.
                  </li>
                </ul>
              </div>
              <div>
                <h6>With Medicare Advantage:</h6>
                <br />
                <ul>
                  <li>
                    These are HMO and PPO plans. It is important to know that
                    Advantage plans have network restrictions. Because of this,
                    you will likely be more limited in your choice of doctors
                    and hospitals. With the PPO plans you can go outside of the
                    network. However, you will usually pay more.
                  </li>
                  <li>
                    The carrier that handles your Advantage plan is the primary
                    payer. Therefore, they will handle all claims.
                  </li>
                  <li>
                    Premiums for an Advantage plan can be very low cost.
                    However, you are still responsible for your monthly Part B
                    premium which is $144.60 per month for most people in 2020.
                    You must also still pay for your Part A premium, if you have
                    one.
                  </li>
                  <li>
                    Each Advantage Plan must at least cover what Medicare Part A
                    and Part B covers. However, they may do so with different
                    rules, costs, and restrictions.
                  </li>
                  <li>
                    Advantage plans may offer additional coverage that Original
                    Medicare does not cover. Examples include dental, vision,
                    and hearing coverage.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              If you have questions or need help with your enrollment, I am a
              phone call away! I am a licensed Independent Broker. Therefore, I
              am not loyal to any one specific insurance company. Above all, my
              loyalty is to my clients. Best of all, my services are 100% free
              of charge!
            </p>
          </div>
        </Section>
      </MedicareWrapper>
      <Logos />
    </Layout>
  )
}

const MedicareWrapper = styled.div`
  h4,
  h3,
  h6 {
    color: var(--mainColor);
  }
  .box {
    p {
      margin: 1rem 0rem;
    }
    margin: 1rem auto;
    ul {
      margin-left: 2rem;
    }
  }
  .column {
    display: flex;
  }
  .bg-hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
`

export default MedicarePage
