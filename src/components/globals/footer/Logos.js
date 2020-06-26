import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const GET_IMAGES = graphql`
  {
    allImages: allFile(filter: { relativeDirectory: { eq: "logos" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Logos = () => {
  return (
    <StaticQuery
      query={GET_IMAGES}
      render={data => {
        const images = data.allImages.edges
        return (
          <GalleryWrapper>
            {images.map(({ node }, index) => {
              return (
                <div key={index} className={`item item-${index + 1}`}>
                  <Img fluid={node.childImageSharp.fluid} />
                </div>
              )
            })}
          </GalleryWrapper>
        )
      }}
    />
  )
}

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0rem auto 4rem auto;
  .item {
    padding: 1rem;
    position: relative;
    flex-basis: 15%;
  }
  .info {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.1rem 0.3rem;
    text-transform: capitalize;
  }
  @media (max-width: 768px) {
    .item {
      flex-basis: 25%;
    }
  }
`

export default Logos
