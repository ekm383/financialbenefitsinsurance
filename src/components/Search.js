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
            licensed
            website
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
            licensed
            website
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
            licensed
            website
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
            licensed
            website
          }
        }
      }
      texasAgents: allAgentsJson(filter: { island: { eq: "texas" } }) {
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
            licensed
            website
          }
        }
      }
      nevadaAgents: allAgentsJson(filter: { island: { eq: "nevada" } }) {
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
            licensed
            website
          }
        }
      }
      utahAgents: allAgentsJson(filter: { island: { eq: "utah" } }) {
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
            licensed
            website
          }
        }
      }
      coloradoAgents: allAgentsJson(filter: { island: { eq: "colorado" } }) {
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
            licensed
            website
          }
        }
      }
      oregonAgents: allAgentsJson(filter: { island: { eq: "oregon" } }) {
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
            licensed
            website
          }
        }
      }
    }
  `)
  const oahu = data.oahuAgents.edges
  const bi = data.bigIslandAgents.edges
  const maui = data.mauiAgents.edges
  const kauai = data.kauaiAgents.edges
  const texas = data.texasAgents.edges
  const nevada = data.nevadaAgents.edges
  const utah = data.utahAgents.edges
  const colorado = data.coloradoAgents.edges
  const oregon = data.oregonAgents.edges

  return (
    <SearchWrapper>
      <div style={{ margin: "0rem auto" }}>
        <div className="container">
          <h4 className="island-name">Oahu Team</h4>
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
                  <p className="website-link">
                    <Link to={`/agent/${node.slug}`}>View Profile</Link>
                  </p>
                  <a href={`tel:${node.phone}`}>{node.phone}</a>
                  <p className="email">{node.email}</p>
                  <p className="island">{node.island}</p>
                  {!node.bilingual ? "" : <p>Bilingual: {node.bilingual}</p>}
                  {!node.licensed ? "" : <p>Licensed in: {node.licensed}</p>}
                  {!node.website ? (
                    ""
                  ) : (
                    <a className="personal-site" href={`${node.website}`}>
                      View Website
                    </a>
                  )}
                </div>
              </div>
            )
          })}
          <h4 className="island-name">Big Island Team</h4>
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
                  <p className="website-link">
                    <Link to={`/agent/${node.slug}`}>View Profile</Link>
                  </p>
                  <a href={`tel:${node.phone}`}>{node.phone}</a>
                  <p className="email">{node.email}</p>
                  <p className="island">{node.island}</p>
                  {!node.bilingual ? "" : <p>Bilingual: {node.bilingual}</p>}
                  {!node.licensed ? "" : <p>Licensed in: {node.licensed}</p>}
                  {!node.website ? (
                    ""
                  ) : (
                    <a className="personal-site" href={`${node.website}`}>
                      View Website
                    </a>
                  )}
                </div>
              </div>
            )
          })}
          <h4 className="island-name">Maui Team</h4>
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
                  <p className="website-link">
                    <Link to={`/agent/${node.slug}`}>View Profile</Link>
                  </p>
                  <a href={`tel:${node.phone}`}>{node.phone}</a>
                  <p className="email">{node.email}</p>
                  <p className="island">{node.island}</p>
                  {!node.bilingual ? "" : <p>Bilingual: {node.bilingual}</p>}
                  {!node.licensed ? "" : <p>Licensed in: {node.licensed}</p>}
                  {!node.website ? (
                    ""
                  ) : (
                    <a className="personal-site" href={`${node.website}`}>
                      View Website
                    </a>
                  )}
                </div>
              </div>
            )
          })}
          <h4 className="island-name">Kauai Team</h4>
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
                  <p className="website-link">
                    <Link to={`/agent/${node.slug}`}>View Profile</Link>
                  </p>
                  <a href={`tel:${node.phone}`}>{node.phone}</a>
                  <p className="email">{node.email}</p>
                  <p className="island">{node.island}</p>
                  {!node.bilingual ? "" : <p>Bilingual: {node.bilingual}</p>}
                  {!node.licensed ? "" : <p>Licensed in: {node.licensed}</p>}
                  {!node.website ? (
                    ""
                  ) : (
                    <a className="personal-site" href={`${node.website}`}>
                      View Website
                    </a>
                  )}
                </div>
              </div>
            )
          })}
          <h4 className="island-name">Texas Team</h4>
          {texas.map(({ node }) => {
            return (
              <div className="box" key={`row_${node.id}`}>
                <div className="avatar">
                  <Img fluid={node.photo.childImageSharp.fluid} />
                </div>
                <div className="name">
                  <p className="agent-name">
                    <Link to={`/agent/${node.slug}`}>{node.name}</Link>
                  </p>
                  <p className="website-link">
                    <Link to={`/agent/${node.slug}`}>View Profile</Link>
                  </p>
                  <a href={`tel:${node.phone}`}>{node.phone}</a>
                  <p className="email">{node.email}</p>
                  <p className="island">{node.island}</p>
                  {!node.bilingual ? "" : <p>Bilingual: {node.bilingual}</p>}
                  {!node.licensed ? "" : <p>Licensed in: {node.licensed}</p>}
                  {!node.website ? (
                    ""
                  ) : (
                    <a className="personal-site" href={`${node.website}`}>
                      View Website
                    </a>
                  )}
                </div>
              </div>
            )
          })}
          <h4 className="island-name">Nevada Team</h4>
          {nevada.map(({ node }) => {
            return (
              <div className="box" key={`row_${node.id}`}>
                <div className="avatar">
                  <Img fluid={node.photo.childImageSharp.fluid} />
                </div>
                <div className="name">
                  <p className="agent-name">
                    <Link to={`/agent/${node.slug}`}>{node.name}</Link>
                  </p>
                  <p className="website-link">
                    <Link to={`/agent/${node.slug}`}>View Profile</Link>
                  </p>
                  <a href={`tel:${node.phone}`}>{node.phone}</a>
                  <p className="email">{node.email}</p>
                  <p className="island">{node.island}</p>
                  {!node.bilingual ? "" : <p>Bilingual: {node.bilingual}</p>}
                  {!node.licensed ? "" : <p>Licensed in: {node.licensed}</p>}
                  {!node.website ? (
                    ""
                  ) : (
                    <a className="personal-site" href={`${node.website}`}>
                      View Website
                    </a>
                  )}
                </div>
              </div>
            )
          })}
          <h4 className="island-name">Utah Team</h4>
          {utah.map(({ node }) => {
            return (
              <div className="box" key={`row_${node.id}`}>
                <div className="avatar">
                  <Img fluid={node.photo.childImageSharp.fluid} />
                </div>
                <div className="name">
                  <p className="agent-name">
                    <Link to={`/agent/${node.slug}`}>{node.name}</Link>
                  </p>
                  <p className="website-link">
                    <Link to={`/agent/${node.slug}`}>View Profile</Link>
                  </p>
                  <a href={`tel:${node.phone}`}>{node.phone}</a>
                  <p className="email">{node.email}</p>
                  <p className="island">{node.island}</p>
                  {!node.bilingual ? "" : <p>Bilingual: {node.bilingual}</p>}
                  {!node.licensed ? "" : <p>Licensed in: {node.licensed}</p>}
                  {!node.website ? (
                    ""
                  ) : (
                    <a className="personal-site" href={`${node.website}`}>
                      View Website
                    </a>
                  )}
                </div>
              </div>
            )
          })}
          <h4 className="island-name">Colorado Team</h4>
          {colorado.map(({ node }) => {
            return (
              <div className="box" key={`row_${node.id}`}>
                <div className="avatar">
                  <Img fluid={node.photo.childImageSharp.fluid} />
                </div>
                <div className="name">
                  <p className="agent-name">
                    <Link to={`/agent/${node.slug}`}>{node.name}</Link>
                  </p>
                  <p className="website-link">
                    <Link to={`/agent/${node.slug}`}>View Profile</Link>
                  </p>
                  <a href={`tel:${node.phone}`}>{node.phone}</a>
                  <p className="email">{node.email}</p>
                  <p className="island">{node.island}</p>
                  {!node.bilingual ? "" : <p>Bilingual: {node.bilingual}</p>}
                  {!node.licensed ? "" : <p>Licensed in: {node.licensed}</p>}
                  {!node.website ? (
                    ""
                  ) : (
                    <a className="personal-site" href={`${node.website}`}>
                      View Website
                    </a>
                  )}
                </div>
              </div>
            )
          })}
          <h4 className="island-name">Oregon Team</h4>
          {oregon.map(({ node }) => {
            return (
              <div className="box" key={`row_${node.id}`}>
                <div className="avatar">
                  <Img fluid={node.photo.childImageSharp.fluid} />
                </div>
                <div className="name">
                  <p className="agent-name">
                    <Link to={`/agent/${node.slug}`}>{node.name}</Link>
                  </p>
                  <p className="website-link">
                    <Link to={`/agent/${node.slug}`}>View Profile</Link>
                  </p>
                  <a href={`tel:${node.phone}`}>{node.phone}</a>
                  <p className="email">{node.email}</p>
                  <p className="island">{node.island}</p>
                  {!node.bilingual ? "" : <p>Bilingual: {node.bilingual}</p>}
                  {!node.licensed ? "" : <p>Licensed in: {node.licensed}</p>}
                  {!node.website ? (
                    ""
                  ) : (
                    <a className="personal-site" href={`${node.website}`}>
                      View Website
                    </a>
                  )}
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
  .personal-site {
    font-size: 0.9rem;
  }
  .name {
    width: 60%;
    padding: 10px;
    background-color: var(--mainColor);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .agent-name {
      a {
        text-decoration: underline;
        font-weight: bolder;
      }
    }
    a {
      color: var(--white);
    }
    p {
      line-height: 1.3rem;
      font-size: 0.9rem;
    }
  }
  .email::first-letter,
  .island::first-letter {
    text-transform: uppercase;
  }
  /* Mobile */
  @media (max-width: 768px) {
    .box {
      flex-basis: 100%;
    }
  }
`

export default Agents
