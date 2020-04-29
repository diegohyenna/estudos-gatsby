import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Images = props => {
  const { img1, img2, img3 } = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "gallery/foto01.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      img2: file(relativePath: { eq: "gallery/foto02.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img3: file(relativePath: { eq: "gallery/foto03.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {(() => {
        switch (props.srcImage) {
          case "foto01.png":
            return (
              <Image fluid={img1.childImageSharp.fluid} alt="Image 1"></Image>
            )

          case "foto02.png":
            return (
              <Image fluid={img2.childImageSharp.fluid} alt="Image 1"></Image>
            )

          case "foto03.png":
            return (
              <Image fluid={img3.childImageSharp.fluid} alt="Image 1"></Image>
            )

          default:
            return (
              <Image fluid={img1.childImageSharp.fluid} alt="Image 1"></Image>
            )
        }
      })()}
    </>
  )
}

export default Images
