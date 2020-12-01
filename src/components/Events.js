import React from "react"
import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"

const Events = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     novemberEvents: allEventsJson(filter: { month: { eq: "november" } }) {
  //       edges {
  //         node {
  //           month
  //           day
  //           time
  //           location
  //           street
  //           city
  //           type
  //         }
  //       }
  //     }
  //   }
  // `)
  // const novemberEvents = data.novemberEvents.edges
  return (
    <StyledEvent>
      {/* <h2>November Events</h2> */}
      <div className="repeat-days">
        <p>Ka Makana Ali'i Farmers Market</p>
        <p>91-5431 Kapolei Pkwy Kapolei, HI 96707</p>
        <p>Every Wednesday 3pm-7pm</p>
        <p>Every Sunday 11am-3pm</p>
      </div>
      <div className="repeat-days">
        <p>Seafood City</p>
        <p>94-050 Farrington Hwy Waipahu, HI 96797</p>
        <p>Every Friday, Saturday, & Monday 9am-6pm</p>
      </div>
      {/* {novemberEvents.map(({ node }, index) => {
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
      })} */}
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
  .repeat-days {
    flex-basis: 50%;
    p:nth-child(1) {
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    .event-box {
      flex-basis: 100%;
    }
  }
`

export default Events
