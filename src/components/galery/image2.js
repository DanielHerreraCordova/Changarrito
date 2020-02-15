import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image2 = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage:  file(relativePath: { eq: "galery2.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000, maxHeight: 350){
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
      }
    `)

    return  (
      <div className="galerytop">
        <h3>Los productos que buscas el mejor precio del mercado</h3>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
  )
  }
  
  export default Image2