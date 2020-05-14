import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"

const Card = () => {
  const data = useStaticQuery(graphql`
    query {
      services: allServicesJson {
        edges {
          node {
            title
            content {
              paragraph
            }
          }
        }
      }
    }
  `)
  const services = data.services.edges
  return (
    <>
      {services.map(({ node }, index) => {
        return (
          <CardWrapper>
            <div className="box" key={index}>
              <h4>{node.title}</h4>
              <p className="content">{node.content.paragraph}</p>
              <AniLink className="link" fade to="#">
                More Information
              </AniLink>
            </div>
          </CardWrapper>
        )
      })}
    </>
  )
}

const CardWrapper = styled.div`
  flex-basis: 25%;
  flex-wrap: wrap;
  .box {
    padding: 1rem;
  }
  h4 {
    color: var(--mainColor);
  }
  .link {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--lightGray);
  }
  @media (max-width: 768px) {
    flex-basis: 100%
  }
`

export default Card
