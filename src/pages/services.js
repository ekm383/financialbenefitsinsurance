import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import Intro from "../components/Intro"
import Services from "../components/Services"
import Products from "../components/Products"

const ServicesPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Industrial Group HI is a commercial real estate group.`,
      author: `@industrialgrouphawaii"
      keywords={[
        `Commerical Real Estate`,
        `Hawaii Real Estate`,
        `Industrial Real Estate`,
        `Industrial Group Hawaii`,
      ]}
    />
    <HeaderIndex style={{ padding: "3rem 0rem" }}>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <BannerPage titleSmall="what we offer" />
      </Section>
    </HeaderIndex>
    <Section style={{ padding: "3rem 0rem", justifyContent: "flex-start" }}>
      <Intro heading="services" />
      <Services />
    </Section>
    <Section style={{ paddingBottom: "4rem", justifyContent: "flex-start" }}>
      <Intro heading="Products" />
      <Products />
    </Section>
  </Layout>
)

export default ServicesPage
