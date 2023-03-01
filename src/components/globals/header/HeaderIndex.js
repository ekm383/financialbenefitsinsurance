import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { Carousel } from "react-bootstrap"
import { FaArrowCircleRight } from "react-icons/fa"
import Banner from "../banner/Banner"

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
      slide3: file(relativePath: { eq: "FBI-Slider-7.jpg" }) {
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
      slide6: file(relativePath: { eq: "FBI-Slider-8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide7: file(relativePath: { eq: "FBI-Slider-9.jpg" }) {
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
          <div className="header-container">
            <Banner
              titleSmall="Welcome to Financial Benefits Insurance"
              title="Benefits are our business."
              title2="Service sets us apart."
            ></Banner>
          </div>
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
          <div className="header-container">
            <Banner
              titleSmall="Welcome to Financial Benefits Insurance"
              title="No one plan is good"
              title2="for everyone."
            ></Banner>
          </div>
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
          <div className="header-container">
            <Banner title="Spreading Aloha" title2="Island Style"></Banner>
          </div>
          <Carousel.Caption>
            Licensed in: <br /> Arizona, California, Colorado, Florida, Georgia,
            Hawaii, Nevada, Oregon, Texas, Utah, Washington
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={data.slide4.childImageSharp.fluid} alt="Fourth Slide" />
          <div className="header-container">
            <Banner
              titleSmall="Welcome to Financial Benefits Insurance"
              title="Building relationships."
              title2="Building Trust."
            ></Banner>
          </div>
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
          <div className="header-container">
            <Banner
              titleSmall="Welcome to Financial Benefits Insurance"
              title="Be treated like family."
              title2=""
            ></Banner>
          </div>
          <Carousel.Caption>
            <Link to="/agent-secure">
              <button>
                Agent Portal
                <FaArrowCircleRight />
              </button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={data.slide6.childImageSharp.fluid} alt="Sixth Slide" />
          <div className="header-container">
            <Banner
              titleSmall="Welcome to Financial Benefits Insurance"
              title="We are a Diversified Team"
              title2=""
            ></Banner>
          </div>
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Img fluid={data.slide7.childImageSharp.fluid} alt="Seventh Slide" />
          <div className="header-container">
            <Banner
              title="Celebrating 12 years of Growth,"
              title2="Expansion, and Innovation"
            ></Banner>
          </div>
          <Carousel.Caption>
            <div className="office-locations">
              8 Office Locations: <br /> Kapiolani | Hilo, Hawaii | Waipahu |
              Kahului, Maui | Chinatown, Honolulu | Houston, Texas | Henderson,
              Nevada | Salt Lake City, Utah
            </div>
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

  .header-container {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 28%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 9000;
  }

  .office-locations {
    font-size: 1.5rem;
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
    justify-content: center;
    align-content: center;
    margin: 0rem auto;

    .carousel-caption {
      bottom: 20px;
    }
    .gatsby-image-wrapper {
      height: 300px;
    }
    .header-container {
      top: 80%;
    }
    .office-locations {
font-size: 1rem;
    }
`
export default BackgroundSection
