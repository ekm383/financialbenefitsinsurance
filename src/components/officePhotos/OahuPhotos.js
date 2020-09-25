import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const OahuPhotos = () => {
  const data = useStaticQuery(graphql`
    query {
      oahuOffice: allFile(
        filter: { relativeDirectory: { eq: "oahu-office" } }
        sort: { fields: name, order: ASC }
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
  const images = data.oahuOffice.edges
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

export default OahuPhotos
