import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Background from "../components/globals/header/Background"
import BannerPage from "../components/globals/banner/BannerPage"
import Section from "../components/globals/section/Section"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"

const Post = ({ data }) => {
  const {
    name,
    phone,
    photo,
    email,
    bilingual,
    bio,
    testimonials,
    videoLink,
  } = data.agentItem

  return (
    <Layout>
      <Wrapper>
        <SEO
          title="Home"
          description="We are an independent insurance agency. We do not work for an insurance company; we work for you!`,
      author: `@financialbenefitsinsurance"
          keywords={[
            `Hawaii Term Life Insurance`,
            `Hawaii Medicare Supplements`,
            `Hawaii Medicare Advantage`,
            `Hawaii Health Insurance`,
          ]}
        />
        <Background>
          <Section style={{ width: "100vw", alignItems: "center" }}>
            <BannerPage title="Contact Agent" />
          </Section>
        </Background>
        <Section style={{ margin: "4rem auto" }}>
          <div className="agentStyle">
            <div className="avatar">
              <Img fluid={photo.childImageSharp.fluid} />
            </div>
            <h2>{name}</h2>
            <p>
              Phone: <span>{phone}</span>
            </p>
            <p>
              Email: <span>{email}</span>
            </p>

            {!bilingual ? (
              ""
            ) : (
              <p>
                Bilingual: <span>{bilingual}</span>
              </p>
            )}

            {!videoLink ? (
              ""
            ) : (
              <Section style={{ margin: "2rem auto" }}>
                <iframe
                  title="About FBIHI"
                  src={videoLink}
                  width="100%"
                  height="360"
                  frameborder="0"
                  webkitallowfullscreen
                  mozallowfullscreen
                  allowfullscreen
                ></iframe>
              </Section>
            )}

            {bio < 1 ? (
              ""
            ) : (
              <p>
                Biography:
                <span>
                  {bio.map(item => (
                    <ul className="item-list">
                      <li>{item}</li>
                    </ul>
                  ))}
                </span>
              </p>
            )}
            {testimonials < 1 ? (
              ""
            ) : (
              <p>
                Testimonials:
                <span>
                  {testimonials.map(item => (
                    <ul className="item-list">
                      <li>{item}</li>
                    </ul>
                  ))}
                </span>
              </p>
            )}
          </div>
        </Section>
        <Section style={{ margin: "3rem auto" }}>
          <form
            name="agentcontact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <ul className="form-list">
              <li id="hidden">
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </li>
              <li className="form-list__row">
                <label htmlFor="name">
                  Your Name:
                  <input id="name" type="text" name="name" required="true" />
                </label>
              </li>
              <li className="form-list__row">
                <label htmlFor="email">
                  Your Email:
                  <input id="email" type="text" name="email" required="true" />
                </label>
              </li>
              <li className="form-list__row">
                <label htmlFor="agent">
                  Agent:
                  <input
                    id="agent"
                    type="text"
                    name="agent"
                    required="true"
                    value={name}
                  />
                </label>
              </li>
              <li className="form-list__row">
                <label htmlFor="message">
                  Message
                  <textarea
                    id="message"
                    type="textarea"
                    name="message"
                    required=""
                  />
                </label>
              </li>
              <li>
                <button type="submit" className="button">
                  Send Email
                </button>
              </li>
            </ul>
          </form>
        </Section>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    agentItem: agentsJson(slug: { eq: $slug }) {
      id
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
      bio
      testimonials
      videoLink
    }
  }
`

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 4rem;
  margin: 0px auto;
  .image-template {
    width: 50%;
  }
  .agentStyle {
    color: var(--mainColor);
  }
  .agentStyle p {
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
    span {
      font-weight: lighter;
    }
  }
  .item-list {
    list-style-type: none;
    li {
      margin-top: 0;
    }
  }
  form {
    width: 80vw;
    margin: 0px auto;
  }
  #hidden {
    display: none;
  }
  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  .avatar {
    width: 40%;
    margin-bottom: 2rem;
  }
  .button {
    color: var(--white);
    background-color: var(--mainColor);
    padding: 12px 25px;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 0;
    border-radius: 2px;
    outline: 0;
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.2s;
  }
  .button:hover,
  .button:active,
  .button:focus {
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    cursor: pointer;
  }

  .button--transparent {
    background: transparent;
    border: 0;
    outline: 0;
  }

  .button--close {
    position: absolute;
    top: 10px;
    left: 10px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: #ffffff;
    border-radius: 50%;
    transition: all 0.25s;
    z-index: 10;
  }
  .button--close svg {
    width: 20px;
    height: 20px;
  }
  .button--close svg * {
    fill: currentColor;
  }
  .button--close:hover,
  .button--close:active,
  .button--close:focus {
    color: #fbcf34;
    background-color: var(--mainColor);
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.1);
  }

  .button--info {
    position: absolute;
    top: 0;
    right: 0;
  }

  input {
    width: calc(100% - 10px);
    min-height: 30px;
    padding-left: 5px;
    padding-right: 5px;
    letter-spacing: 0.5px;
    border: 0;
    border-bottom: 1px solid #f0f0f0;
  }
  input:valid {
    border-color: lightgreen;
  }
  input:focus {
    outline: none;
    border-color: lightgreen;
  }

  .form-list {
    padding-left: 0;
    list-style: none;
  }
  .form-list__row {
    margin-bottom: 25px;
  }
  .form-list__row label {
    position: relative;
    display: block;
    text-transform: capitalize;
    font-weight: bold;
    font-size: 1rem;
    color: var(--mainColor);
    padding-bottom: 1rem;
  }
  .form-list__row--inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .form-list__row--inline > :first-child {
    -ms-flex: 2;
    flex: 2;
    padding-right: 20px;
  }
  .form-list__row--inline > :nth-child(2n) {
    -ms-flex: 1;
    flex: 1;
  }
  .form-list__input-inline {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .form-list__input-inline > * {
    width: calc(50% - 10px - 10px);
  }
  .form-list__row--agree {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 12px;
  }
  .form-list__row--agree label {
    font-weight: 400;
    text-transform: none;
    color: #676767;
  }
  .form-list__row--agree input {
    width: auto;
    margin-right: 5px;
  }
  textarea {
    width: 100%;
    height: 200px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
  }
  @media (max-width: 768px) {
    .avatar {
      width: 60%;
    }
  }
`

export default Post
