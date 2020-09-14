import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Carousel } from "react-bootstrap"

const BackgroundSection = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      slide1: file(relativePath: { eq: "FBI-Slider-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide2: file(relativePath: { eq: "FBI-Slider-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide3: file(relativePath: { eq: "FBI-Slider-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide4: file(relativePath: { eq: "FBI-Slider-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide5: file(relativePath: { eq: "FBI-Slider-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <CarouselWrapper>
      {children}
      <Carousel>
        <Carousel.Item>
          <Img fluid={data.slide1.childImageSharp.fluid} alt="First Slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={data.slide2.childImageSharp.fluid} alt="Second Slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={data.slide3.childImageSharp.fluid} alt="Third Slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={data.slide4.childImageSharp.fluid} alt="Fourth Slide" />
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={data.slide5.childImageSharp.fluid} alt="Fifth Slide" />
        </Carousel.Item>
      </Carousel>
    </CarouselWrapper>
  )
}

const CarouselWrapper = styled.div`
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    display: none;
  }
`

export default BackgroundSection
