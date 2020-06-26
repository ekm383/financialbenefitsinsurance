import React, { Component } from "react"
import styled from "styled-components"
import Section from "../section/Section"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaInstagram, FaFacebook, FaGoogle } from "react-icons/fa"

class Footer extends Component {
  state = {
    icons: [
      {
        id: 2,
        icon: <FaInstagram className="icon facebook-instagram" />,
        path: "https://www.instagram.com/restaurantmarketinghawaii",
      },
      {
        id: 3,
        icon: <FaGoogle className="icon google-icon" />,
        path: "https://www.google.com/restaurantmarketinghawaii",
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: "https://www.facebook.com/restaurantmarketinghawaii",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <Section>
          <div className="box">
            <h4>Contact:</h4>
            <p>
              1311 Kapiolani Blvd
              <br />
              Suite 504
              <br />
              Honolulu, HI 96814
            </p>
            <p className="phone">Tel: (808) 792-5194</p>
            <p className="phone">Fax: (808) 792-5187</p>
          </div>
          <div className="box">
            <h4>About Us:</h4>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took.
            </p>
          </div>
          <div className="box">
            <h4>Our Menu:</h4>
            <div className="nav">
              <nav>
                <p>Home</p>
                <p>
                  <AniLink fade to="/agents">
                    Agents
                  </AniLink>
                </p>
                <p>Services</p>
                <p>Events</p>
              </nav>
              <nav>
                <p>Testimonials</p>
                <p>About</p>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
              </nav>
            </div>
          </div>
          <div className="box">
            <h4>Follow Us:</h4>
            {this.state.icons.map(item => (
              <a
                href={item.path}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </Section>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  width: 100vw;
  padding: 5rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  background: var(--darkGray);
  color: var(--white);
  .nav {
    display: flex;
    nav {
      margin-right: 1rem;
    }
  }
  p,
  .phone {
    font-size: 0.7rem;
    line-height: 1.2rem;
    margin-bottom: 0rem;
  }
  .agent {
    font-weight: bold;
    margin-top: 0.5rem;
  }
  .box {
    flex-basis: 20%;
  }
  a {
    color: var(--white);
    margin-right: 5px;
  }
  @media (max-width: 800px) {
    padding: 1rem 0rem 3rem 0rem;
    .box {
      flex-basis: 40%;
      margin-top: 2rem;
    }
    .phone {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 700px) {
    padding: 1rem 0rem 3rem 0rem;
    .box {
      flex-basis: 100%;
      margin-top: 2rem;
    }
    .phone {
      font-size: 0.8rem;
    }
  }
`

export default Footer
