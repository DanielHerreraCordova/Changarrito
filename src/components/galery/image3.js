import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image3 = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage:  file(relativePath: { eq: "galery3.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000, maxHeight: 350){
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
      }
    `)
    return  <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image3