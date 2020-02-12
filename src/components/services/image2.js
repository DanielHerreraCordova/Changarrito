import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image2 = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage1:  file(relativePath: { eq: "service2.jpg" }) {
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
    fluid={data.placeholderImage1.childImageSharp.fluid}
    objectFit="cover"
     />
}

export default Image2