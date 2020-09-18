import React, { Component } from "react"
import styled from "styled-components"
import Section from "../section/Section"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import BBB from "../../../images/BBB.png"
import Ethics from "../../../images/ethics-net.png"

class Footer extends Component {
  state = {
    icons: [
      {
        id: 2,
        icon: <FaInstagram className="icon facebook-instagram" />,
        path: "https://www.instagram.com/",
      },
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path:
          "https://www.facebook.com/Financial-Benefits-Insurance-Inc-405010142920721",
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <Section>
          <div className="box">
            <p>
              <span>Contact:</span>
            </p>
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
            <p>
              <span>Our Menu:</span>
            </p>
            <div className="nav">
              <nav>
                <ul>
                  <li>Home</li>
                  <li>
                    <AniLink fade to="/agents">
                      Agents
                    </AniLink>
                  </li>
                  <li>Services</li>
                  <li>Events</li>
                  <li>Testimonials</li>
                  <li>About</li>
                  <li>
                    <AniLink fade to="/privacy">
                      Privacy Policy
                    </AniLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="box">
            <p>
              <span>Follow Us:</span>
            </p>
            <div>
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
            <div className="ethics">
              <a href="https://www.bbb.org/northwest/business-reviews/insurance-services-office/financial-benefits-insurance-inc-in-honolulu-hi-53075218/#sealclick">
                <img src={BBB} alt="BBB" width="75px" />
              </a>
              <a href="https://www.ethics.net/member=107896/edward-motosue">
                <img src={Ethics} alt="ethics" width="75px" />
              </a>
              <p>Belong to HIIA, HAHU Org. Hawaii Genealogical Society</p>
            </div>
          </div>
        </Section>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.div`
  width: 100%;
  padding: 3rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  background: var(--gray);
  color: var(--white);
  .box {
    flex-basis: 25%;
    margin: 0.5rem 0rem;
  }
  a {
    color: var(--white);
  }
  p {
    margin: 0;
    font-size: 10px;
    line-height: 1.2rem;
    span {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  ul {
    list-style-type: none;
    font-size: 10px;
    margin-bottom: 0;
    li {
      font-size: 10px;
      line-height: 1.1rem;
      margin-top: 0rem;
    }
  }
  svg {
    font-size: 1.5rem;
    margin-right: 0.2rem;
    text-align: center;
  }
  a img {
    margin: 1rem auto;
  }
  @media (max-width: 768px) {
    .box {
      flex-basis: 90%;
    }
  }
`

export default Footer
