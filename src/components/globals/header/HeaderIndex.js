import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Carousel } from "react-bootstrap"
import { FaArrowCircleRight } from "react-icons/fa"

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
          <Carousel.Caption>
            <Link to="/events">
              <button>
                Upcoming Events <FaArrowCircleRight />
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={data.slide2.childImageSharp.fluid} alt="Second Slide" />
          <Carousel.Caption>
            <Link to="/agents">
              <button>
                Agents <FaArrowCircleRight />
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={data.slide3.childImageSharp.fluid} alt="Third Slide" />
          <Carousel.Caption>
            Licensed in: <br /> Arizona, California, Georgia, Hawaii, Nevada,
            Oregon, Texas, Utah, Washington
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={data.slide4.childImageSharp.fluid} alt="Fourth Slide" />
          <Carousel.Caption>
            <Link to="/client-secure">
              <button>
                Client Portal
                <FaArrowCircleRight />
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={data.slide5.childImageSharp.fluid} alt="Fifth Slide" />
          <Carousel.Caption>
            <Link to="/agent-secure">
              <button>
                Agent Portal
                <FaArrowCircleRight />
              </button>
            </Link>
          </Carousel.Caption>
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
  .carousel-caption {
    bottom: 100px;
  }

  button {
    font-size: 1rem;
    width: 200px;
    padding: 0.8rem 1rem;
    border: 1px solid #ffffff;
    border-radius: 25px;
    background: #ffffff;
    color: var(--mainColor);
    transition: all 0.2s linear;
    &:hover {
      cursor: pointer;
      background: none;
      border: 1px solid #ffffff;
      color: #ffffff;
    }
  }
  svg {
    margin-left: 0.3rem;
    margin-top: -2px;
  }
  @media (max-width: 768px) {
    .carousel-caption {
      bottom: 20px;
    }
    .gatsby-image-wrapper {
      height: 300px;
    }
  }
`

export default BackgroundSection
