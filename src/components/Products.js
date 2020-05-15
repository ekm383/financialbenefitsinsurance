import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { useStaticQuery, graphql } from "gatsby"
import { FaArrowAltCircleRight } from "react-icons/fa"

const Products = () => {
  const data = useStaticQuery(graphql`
    query {
      products: allProductsJson {
        edges {
          node {
            slug
            product
            content
          }
        }
      }
    }
  `)
  const products = data.products.edges
  return (
    <>
      {products.map(({ node }, index) => {
        return (
          <CardWrapper>
            <div className="box" key={index}>
              <h4>{node.product}</h4>
              <p className="content">{node.content[0].slice(0, 70)}...</p>
              <AniLink className="link" fade to={`/product/${node.slug}`}>
                More Information <FaArrowAltCircleRight />
              </AniLink>
            </div>
          </CardWrapper>
        )
      })}
    </>
  )
}

const CardWrapper = styled.div`
  flex-basis: 33%;
  flex-wrap: wrap;
  .box {
    padding: 1rem;
  }
  .content {
    margin-bottom: 0.5rem;
  }
  h4 {
    color: var(--mainColor);
  }
  svg {
    font-size: 0.6rem;
  }
  .link {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--lightGray);
  }
  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`

export default Products
