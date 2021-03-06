import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/globals/header/Background"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import Services from "../components/Services"

const ServicesPage = () => (
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
        <BannerPage title="services" />
      </Section>
    </Background>
    <Section style={{ padding: "3rem 0rem", justifyContent: "flex-start" }}>
      <Services />
    </Section>
  </Layout>
)

export default ServicesPage
