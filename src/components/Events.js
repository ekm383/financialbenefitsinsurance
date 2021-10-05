import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Events = () => {
  const data = useStaticQuery(graphql`
    query {
      octoberEvents: allEventsJson(filter: { month: { eq: "october" } }) {
        edges {
          node {
            month
            day
            time
            location
            street
            city
            type
            link
          }
        }
      }
    }
  `)
  const octoberEvents = data.octoberEvents.edges
  return (
    <StyledEvent>
      <div className="repeat-days">
        <p>Seafood City</p>
        <p>94-050 Farrington Hwy Waipahu, HI 96797</p>
        <p>Every Friday, Saturday & Monday 9am-6pm</p>
      </div>
      <div className="repeat-days">
        <p>Pearl City Shopping Center (Near Don Quijote)</p>
        <p>850 Kamehameha Hwy Pearl City, 96782</p>
        <p>Tuesdays 9am-5pm, Wednesdays 1pm-5pm, Thursdays 9am-1pm</p>
      </div>
      {octoberEvents.map(({ node }, index) => {
        return (
          <div className="event-box" key={index}>
            <h3>{node.day}</h3>
            <p>
              <span>{node.location}</span>
            </p>
            <p>{node.street}</p>
            <p>{node.city}</p>
            <p>{node.time}</p>
            <p>{node.type}</p>
            <p id="link">{node.link}</p>
          </div>
        )
      })}
    </StyledEvent>
  )
}

const StyledEvent = styled.div`
  width: 80vw;
  margin: 4rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  h2 {
    flex-basis: 100%;
    margin: 2rem 0rem;
    color: var(--mainColor);
  }
  h3 {
    flex-basis: 100%;
    font-size: 1.5rem;
    margin: 1rem 0rem 0.5rem 0rem;
    color: var(--mainColor);
  }
  p {
    margin: 0rem;
    span {
      font-weight: bold;
    }
  }
  .event-box {
    flex-basis: 50%;
    margin-bottom: 1rem;
  }
  .repeat-days {
    flex-basis: 50%;
    margin-top: 2rem;
    p:nth-child(1) {
      font-weight: bold;
    }
  }
  #link {
    font-style: italic;
    font-size: 1rem;
    color: var(--lightGray);
  }
  @media (max-width: 768px) {
    .event-box {
      flex-basis: 100%;
    }
    .repeat-days {
      flex-basis: 100%;
    }
  }
`

export default Events
