import React, { Component } from "react"
import styled from "styled-components"
import Section from "../section/Section"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaInstagram, FaFacebook } from "react-icons/fa"
import BBB from "../../../images/BBB.png"
import Ethics from "../../../images/ethics-net.png"
import NAHU from "../../../images/nahu-logo.png"
import HIIA from "../../../images/state_logo.png"
import TenYear from "../../../images/fib-hi-10-year-badge.png"

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
              1311 Kapiolani Blvd Suite 504
              <br />
              Honolulu, HI 96814
            </p>
            <p className="phone">
              <a href="tel:+1-808-792-5194">Tel: (808) 792-5194</a>
            </p>
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
                <img src={BBB} alt="BBB" width="100px" />
              </a>
              <a href="https://www.ethics.net/member=107896/edward-motosue">
                <img src={Ethics} alt="ethics" width="100px" />
              </a>
            </div>
          </div>
          <div className="box belonging-box">
            <p>
              <span>Belonging to:</span>
            </p>
            <a href="http://nahu.org/">
              <img src={NAHU} alt="NAHU" width="60px" />
            </a>
            <a href="https://www.hiia.org/default.aspx">
              <img src={HIIA} alt="HIIA" width="150px" />
            </a>
            <a href="">
              <p>- HAHU HI Genealogical Society</p>
            </a>
            <a href="http://hpgs.org/">
              <p>- HPGS</p>
            </a>
          </div>
        </Section>
        <Section>
          <div className="ten-year">
            <img src={TenYear} alt="Ten Years of Service" />
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
    margin: 0px 0px 0px 0px;
    font-size: 14px;
    line-height: 1.5rem;
    span {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  .phone {
    margin-bottom: 0px;
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
    margin-bottom: 5px;
  }
  .ethics,
  .belonging-box {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .ten-year {
    margin: 0px auto;
    img {
      margin-top: 20px;
      width: 150px;
    }
  }
  @media (max-width: 768px) {
    .box {
      flex-basis: 90%;
    }
  }
`

export default Footer
