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
            <Nav.Link href="/">Events</Nav.Link>
            <Nav.Link href="/">Testimonials</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </StyledNav>
  )
}

const StyledNav = styled.div`
  margin: 0 auto;
  .navbar-light .navbar-toggler {
    border: none;
  }
  #responsive-navbar-nav div a {
    font-size: 1rem;
    font-weight: bold;
    margin-right: 0.2rem;
    color: #297aaf;
    transition: 0.3s ease-in-out;
    &:hover {
      color: var(--lightGray);
    }
  }
`

export default NavBarLinks
