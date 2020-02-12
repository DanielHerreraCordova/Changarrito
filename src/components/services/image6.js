import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image6 = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage:  file(relativePath: { eq: "service6.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 350) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `)
    return  <Img
    className="imgServices"
    fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image6