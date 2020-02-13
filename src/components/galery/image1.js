import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image1 = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage:  file(relativePath: { eq: "galery1.jpg" }) {
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
      <h3>Mejora tu productividad</h3>
      <p className="desc">Ahoramos tiempo en cada actividad que realizas</p>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </div>
)
}

export default Image1