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
            style={{ marginRight: "3rem" }}
            src={img}
            alt="logo"
            width="90px"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/medicare">Medicare 101</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/service/dental">Dental</NavDropdown.Item>
              <NavDropdown.Item href="/service/group-plans">
                Group Plans
              </NavDropdown.Item>
              <NavDropdown.Item href="/service/health-insurance">
                Health Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="/service/life-insurance">
                Life Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="/service/permanent-life-insurance">
                Permanent Life Insurance
              </NavDropdown.Item>
              <NavDropdown.Item href="/service/term-life-insurance">
                Term Life Insurance
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/product/medicare-advantage">
                Medicare Advantage
              </NavDropdown.Item>
              <NavDropdown.Item href="/product/final-expense">
                Final Expense
              </NavDropdown.Item>
              <NavDropdown.Item href="/product/annuity">
                Annuity
              </NavDropdown.Item>
              <NavDropdown.Item href="/product/long-term-care">
                Long Term Care
              </NavDropdown.Item>
              <NavDropdown.Item href="/product/medicare-supplements">
                Medicare Supplements
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/testimonials">Testimonials</Nav.Link>
            <NavDropdown title="Who We Are" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
              <NavDropdown.Item href="/our-story">Our Story</NavDropdown.Item>
              <NavDropdown.Item href="/agents">Agents</NavDropdown.Item>
              <NavDropdown.Item href="/faq">FAQ</NavDropdown.Item>
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
  font-size: 0.9rem;
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
