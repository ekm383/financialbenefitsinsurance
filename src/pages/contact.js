import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/globals/header/Background"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import ContactForm from "../components/ContactForm"

const ContactPage = () => (
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
    <Background style={{ padding: "3rem 0rem" }}>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <BannerPage title="contact us" />
      </Section>
    </Background>
    <Section style={{ margin: "4rem auto 0rem auto" }}>
      <ContactForm />
    </Section>
  </Layout>
)

export default ContactPage
