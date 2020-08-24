import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Agents = () => {
  const data = useStaticQuery(graphql`
    query {
      oahuAgents: allAgentsJson(filter: { island: { eq: "oahu" } }) {
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
      bigIslandAgents: allAgentsJson(filter: { island: { eq: "big island" } }) {
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
      mauiAgents: allAgentsJson(filter: { island: { eq: "maui" } }) {
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
      kauaiAgents: allAgentsJson(filter: { island: { eq: "kauai" } }) {
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
  const oahu = data.oahuAgents.edges
  const bi = data.bigIslandAgents.edges
  const maui = data.mauiAgents.edges
  const kauai = data.kauaiAgents.edges

  return (
    <SearchWrapper>
      <div style={{ margin: "0rem auto" }}>
        <div className="container">
          <h4 className="island-name">Oahu Agents</h4>
          {oahu.map(({ node }) => {
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
          <h4 className="island-name">Big Island Agents</h4>
          {bi.map(({ node }) => {
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
          <h4 className="island-name">Maui Agents</h4>
          {maui.map(({ node }) => {
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
          <h4 className="island-name">Kauai Agents</h4>
          {kauai.map(({ node }) => {
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
  margin: 0rem auto;
  .container {
    width: 100%;
    margin: 0rem auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
  /* Agent Box */
  .island-name {
    width: 100%;
    margin: 3rem auto;
    font-style: italic;
    font-size: 2rem;
    color: var(--mainColor);
  }
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
    width: 60%;
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
