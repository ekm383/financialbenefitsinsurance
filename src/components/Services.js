import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { FaArrowAltCircleRight } from "react-icons/fa"

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      services: allServicesJson {
        edges {
          node {
            service
            content
            slug
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
              <h4>{node.service}</h4>
              <p className="content">{node.content[0].slice(0, 70)}...</p>
              <Link className="link" fade to={`/service/${node.slug}`}>
                More Information <FaArrowAltCircleRight />
              </Link>
            </div>
          </CardWrapper>
        )
      })}
    </>
  )
}

const CardWrapper = styled.div`
  flex-basis: 33%;
  flex-wrap: wrap;
  .box {
    padding: 1rem;
  }
  .content {
    margin-bottom: 0.5rem;
  }
  h4 {
    color: var(--mainColor);
  }
  svg {
    font-size: 0.6rem;
  }
  .link {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--lightGray);
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`

export default Services
