import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const Image1 = () => {
    const data = useStaticQuery(graphql`
      query {
        placeholderImage1:  file(relativePath: { eq: "service1.jpg" }) {
          childImageSharp {
            fixed
              {
              ...GatsbyImageSharpFixed
            }
            fluid(
              maxWidth: 1024,
              quality: 100
            )
            {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    `)
    return  <Img className="imgServices" fluid={data.placeholderImage1.childImageSharp.fluid}
    />
}

export default Image1