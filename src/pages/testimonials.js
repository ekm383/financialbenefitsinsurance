import React from "react"
import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const TestimonialsPage = () => (
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
      <HeaderIndex style={{ padding: "3rem 0rem" }}>
        <Section style={{ width: "100vw", alignItems: "center" }}>
          <BannerPage titleSmall="Testimonials" />
        </Section>
      </HeaderIndex>
      <Section style={{ padding: "3rem 0rem", width: "60vw" }}>
        <div className="box">
          <FaQuoteLeft />
          <p>
            I was glad to run into you at Safeway last week as I had been thinking about updating you on how happy I have been with the Medicare Supplement Plan...that you enrolled me in last open enrollment period.  Since moving to Hawaii, I had to establish relationships with a new primary care physician as well as an orthopedic specialist for my knees.  I have had several appointments and procedures and the insurance has worked as you explained it would.  I was a bit skeptical as coming from Nevada, insurance never worked for me as promised.  Thank you again for assisting me in finding the plan that would be best for my needs and budget.</p>
          <p>I will be contacting you again during open enrollment to upgrade my Part D plan from my current...Plan.  Now that I see what my prescriptions needs are, I think I would like a little more comprehensive plan.</p>
          <p className="name">- Pam L. | Honolulu, HI</p>
          <FaQuoteRight />
        </div>
        <hr />
        <div className="box">
          <FaQuoteLeft />
          <p>
            Kamaka Jingao has been a wonderful agent. He is always quick to respond to my questions and concerns. He looks out for my best interest. I have referred many people to Kamaka. Thank you for your help!</p>
          <p className="name">- Jeanette P. | Kaneohe, HI</p>
          <FaQuoteRight />
        </div>
        <hr />
        <div className="box">
          <FaQuoteLeft />
          <p>
            It has been an extreme pleasure having Kamaka Jingao, from Financial Benefits Insurance, as my Medicare Insurance agent. His level of service and professionalism is unparalleled. I would HIGHLY recommend Kamaka to anyone!</p>
          <p className="name">- Abby P. | Pearl City, HI</p>
          <FaQuoteRight />
        </div>
        <hr />
        <div className="box">
          <FaQuoteLeft />
          <p>
            Wendy Grace is a lovely person and very intelligent. She was very professional and works very seriously. I have never been this satisfied. She is wonderful.</p>
          <p className="name">- Richard V-B. | Keaau, HI</p>
          <FaQuoteRight />
        </div>
        <hr />
        <div className="box">
          <FaQuoteLeft />
          <p>
            I am very happy with my insurance plan and owe it all to you (Brenda Takahashi). I appreciate you keeping in contact. You're great!</p>
          <p className="name">- Lorraine T. | Honolulu, HI</p>
          <FaQuoteRight />
        </div>
        <hr />
        <div className="box">
          <FaQuoteLeft />
          <p>
            About 1 1/2 years Stephanie Flores became my healthcare rep she took all the worries and confusion away that comes along with insurance plans while showing the true meaning of aloha. I don't feel that I just got a sales rep but someone with thorough knowledge of Medicare Advantage Plans, helpful and that goes beyond what is expected of her to meet my needs.</p>
          <p>Mahalo Steph for making me feel like I am one of your ohana and always going that extra mile it means a lot to me.</p>
          <p className="name">- Shannon C. | Honolulu, HI</p>
          <FaQuoteRight />
        </div>
        <hr />
        <div className="box">
          <FaQuoteLeft />
          <p>
            I have received excellent services from Brenda KWP Takahashi.  She has keep me informed and knows her products.  Brenda is a wonderful person.</p>
          <p className="name">- Kenrick C. | Honolulu, HI</p>
          <FaQuoteRight />
        </div>
        <hr />
        <div className="box">
          <FaQuoteLeft />
          <p>
            Ed Motosue has given me and my late husband superior service - very informative and patient. My late husband was an insurance agent and when Mr. Motosue approached us, my husband was very skeptical regarding Medicare Advantage plans, but after Mr. Motosue spent time with us he became a believer and thought that Mr. Motosue's service was excellent! After that we have been with Mr. Motosue over eight years and I will never change agents</p>
          <p className="name">- Audrey M. | Honolulu, HI</p>
          <FaQuoteRight />
        </div>
        <hr />
        <div className="box">
          <FaQuoteLeft />
          <p>
            In late 2017, we lost our employer group medical insurance unexpectedly. Then we were being told by the social security department that we were not eligible for Medicare insurance till July 2018. During this most confusing and frustrating period, our agent Portia Baker came to our aid. My wife and I were able to enroll on Medicare and subsequently Portia helped us to enroll on a Medicare Supplemental Plan that best fit our needs.During this entire process, we were very impressed by her knowledge and her professionalism. Portia, who recently enrolled in Medicare herself, has a personal first-hand experience of the process which makes her very knowledgeable and compassionate. As your agent Portia will guide you through this very complicated and confusing maze. We are very happy with Portia’s service and highly recommend her to our friends, family, colleagues and clients.</p>
          <p className="name">- David & Pamela L. | Honolulu, HI</p>
          <FaQuoteRight />
        </div>
      </Section>
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
.box {
  margin: 1rem auto;
}
p {
  margin: 1rem auto;
}
.name {
  font-weight: 700
}
hr {
  width: 100%;
  color: var(--lightGray);
  margin: 0rem auto;
}
svg {
  color: var(--mainColor);
}
`

export default TestimonialsPage
