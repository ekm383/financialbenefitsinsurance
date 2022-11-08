import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SaltlakecityPhotos = () => {
  const data = useStaticQuery(graphql`
    query {
      saltlakecityOffice: allFile(
        filter: { relativeDirectory: { eq: "salt-lake-city-office" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const images = data.saltlakecityOffice.edges
  return (
    <StyledOffice>
      {images.map(({ node }, index) => {
        return (
          <div key={index} className={`item`}>
            <Img fluid={node.childImageSharp.fluid} />
          </div>
        )
      })}
    </StyledOffice>
  )
}

const StyledOffice = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 25%;
  }
  @media (max-width: 768px) {
    .item {
      width: 50%;
    }
  }
`

export default SaltlakecityPhotos
