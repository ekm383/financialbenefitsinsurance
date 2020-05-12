import React, { Component } from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

class NavBarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        text: "home",
      },
      {
        id: 1,
        path: "/agents",
        text: "agents",
      },
      {
        id: 2,
        path: "/services",
        text: "services",
      },
      {
        id: 3,
        path: "/events",
        text: "events",
      },
      {
        id: 4,
        path: "/testimonials",
        text: "testimonials",
      },
      {
        id: 5,
        path: "/about",
        text: "about",
      },
      {
        id: 6,
        path: "/contact",
        text: "contact",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper open={this.props.navBarOpen}>
        {this.state.links.map(item => {
          return (
            <li key={item.id}>
              <AniLink fade to={item.path} className="nav-link">
                {item.text}
              </AniLink>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    font-family: 'Poppins';
    font-weight: bold;
    text-decoration: none;
    padding: 0.8rem 1.2rem;
    color: var(--mainColor);
    font-size: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
      background: var(--darkGray);
      color: var(--white);
      padding: 0.8rem 1.5rem;
    }
  }
  height: ${props => (props.open ? "355px" : "0px")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    .nav-link {
      padding: 1.4rem 1.2rem;
      font-size: 1rem;
      color: var(--mainColor);
    }
    .nav-link:hover {
      color: var(--lightGray);
      background-color: var(--white);
      padding: 1.4rem 1.2rem;
    }
    li:nth-child(7) > a {
      background-color: var(--mainColor);
      color: var(--white);
    }
    li:nth-child(7) > a:hover {
      color: var(--lightGray);
    }
  }
`

export default NavBarLinks
