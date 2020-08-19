import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Agents = () => {
  const data = useStaticQuery(graphql`
    query {
      agents: allAgentsJson(sort: { fields: island, order: DESC }) {
        edges {
          node {
            id
            island
            slug
            photo {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            phone
            email
            bilingual
          }
        }
      }
    }
  `)
  const agents = data.agents.edges

  return (
    <SearchWrapper>
      <div style={{ margin: "0rem auto" }}>
        <div className="container">
          {agents.map(({ node }) => {
            return (
              <div className="box" key={`row_${node.id}`}>
                <div className="avatar">
                  <Img fluid={node.photo.childImageSharp.fluid} />
                </div>
                <div className="name">
                  <p className="agent-name">
                    <Link to={`/agent/${node.slug}`}>{node.name}</Link>
                  </p>
                  <p>
                    <Link to={`/agent/${node.slug}`}>View Website</Link>
                  </p>
                  <p>{node.phone}</p>
                  <p>{node.email}</p>
                  {!node.island ? "" : <p>Island: {node.island}</p>}
                  {!node.bilingual ? "" : <p>Bilingual: {node.bilingual}</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </SearchWrapper>
  )
}

const SearchWrapper = styled.div`
  .container {
    width: 100%;
    margin: 0rem auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
  /* Agent Box */
  .box {
    display: flex;
    flex-basis: 50%;
    margin-bottom: 1.5rem;
    p {
      margin-bottom: 0rem;
    }
  }
  .avatar {
    width: 40%;
  }
  .name {
    width: 55%;
    padding: 10px;
    background-color: var(--mainColor);
    color: white;
    a {
      color: white;
      font-weight: bolder;
    }
    p {
      line-height: 1.2rem;
    }
    .agent-name {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
  }
  /* Mobile */
  @media (max-width: 768px) {
    .box {
      flex-basis: 100%;
    }
  }
`

export default Agents
