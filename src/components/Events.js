import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const Events = () => {
  const data = useStaticQuery(graphql`
    query {
      novemberEvents: allEventsJson(filter: { month: { eq: "november" } }) {
        edges {
          node {
            month
            day
            time
            location
            street
            city
            type
          }
        }
      }
    }
  `)
  const novemberEvents = data.novemberEvents.edges
  return (
    <StyledEvent>
      <h2>November Events</h2>
      {novemberEvents.map(({ node }, index) => {
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
    margin: 1rem 0rem 0rem 0rem;
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
  @media (max-width: 768px) {
    .event-box {
      flex-basis: 100%;
    }
  }
`

export default Events
