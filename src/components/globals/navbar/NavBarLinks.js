import React from "react"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import styled from "styled-components"
import img from "../../../images/fbihi-logo-gray.png"

const NavBarLinks = () => {
  return (
    <StyledNav>
      <Navbar collapseOnSelect expand="md">
        <Navbar.Brand href="/">
          <img
            style={{ marginRight: "1rem" }}
            src={img}
            alt="logo"
            width="120px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="About Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/about">Principles</NavDropdown.Item>
              <NavDropdown.Item href="/executives">
                Office Staff
              </NavDropdown.Item>
              <NavDropdown.Item href="/our-vision">Our Vision</NavDropdown.Item>
              <NavDropdown.Item href="/organizational-chart">
                Organizational Chart
              </NavDropdown.Item>
              <NavDropdown.Item href="/our-story">Our Story</NavDropdown.Item>
              <NavDropdown.Item href="/eagle-awards">
                Awards and Distinctions
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/medicare">Medicare Basics</Nav.Link>
            <NavDropdown title="Health Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/product/medicare-advantage">
                Medicare Advantage
              </NavDropdown.Item>
              <NavDropdown.Item href="/medicare-supplements">
                Medicare Supplements
              </NavDropdown.Item>
              <NavDropdown.Item href="/dental">Dental</NavDropdown.Item>
              <NavDropdown.Item href="/service/health-insurance">
                Health Insurance
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Wealth Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/life-insurance">
                Life Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="/permanent-life">
                Permanent Life Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="/term-life">
                Term Life Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="/final-expense">
                Final Expense
              </NavDropdown.Item>
              <NavDropdown.Item href="/annuity">Annuity</NavDropdown.Item>
              <NavDropdown.Item href="/product/long-term-care">
                Long Term Care
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/agents">Agents</Nav.Link>
            <NavDropdown title="Join Us" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/join">
                Why Do Business with Financial Benefits Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="/what-separates-us">
                What Separates Us From the Field
              </NavDropdown.Item>
              <NavDropdown.Item href="/get-this">
                Get All of This and More
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledNav>
  )
}

const StyledNav = styled.div`
  margin: 0 auto;
  font-family: "Merriweather";
  .navbar-light .navbar-toggler {
    border: none;
  }
  .dropdown-menu {
    border: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  }
  .dropdown-item {
    padding: 0.5rem 2rem;
  }
  #responsive-navbar-nav div a {
    font-weight: bold;
    font-size: 0.9rem;
    margin-right: 0.2rem;
    color: #297aaf;
    transition: 0.3s ease-in-out;
    &:hover {
      color: var(--gray);
    }
  }
  @media (max-width: 768px) {
    .dropdown-menu {
      box-shadow: none;
    }
  }
`

export default NavBarLinks
