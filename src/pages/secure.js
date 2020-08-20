import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { isLoggedIn } from "../components/services/auth"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import SecureLayout from "../components/SecureLayout"

const SecurePage = () => {
  const image = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "FBI-Slider-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      Tag="section"
      className="bg-hero"
      fluid={image.bg.childImageSharp.fluid}
      backgroundColor={`#ffffff`}
    >
      <SecureLayout>
        <StyledSecurePage>
          <h1>Aloha!</h1>
          <p>
            {isLoggedIn() ? (
              <>
                You are logged in, click <Link to="/app/profile">here </Link>
                to view videos.
              </>
            ) : (
              <>
                Please <Link to="/app/login">LOGIN</Link> to see the restricted
                content.
              </>
            )}
          </p>
        </StyledSecurePage>
      </SecureLayout>
    </BackgroundImage>
  )
}

const StyledSecurePage = styled.div`
  height: 80vh;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: -5rem;
    font-size: 3rem;
    font-style: italic;
    color: #ffffff;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: #ffffff;
    font-weight: bold;
    a {
      color: #ffffff;
      text-decoration: underline;
    }
  }
  .bg-hero {
    width: 100%;
    background-position: center center;
    background-repeat: repeat-y;
    background-size: cover;
  }
  @media (max-width: 768px) {
    width: 90vw;
    text-align: center;
  }
`

export default SecurePage
