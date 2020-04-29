import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SEO from "../components/seo"

const Gallery = () => {
  const { gallery } = useStaticQuery(graphql`
    query {
      gallery: allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
        nodes {
          id
          childImageSharp {
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Galeria"></SEO>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">Galeria</h1>
          </div>
          <div className="col-12">
            <div className="row">
              {gallery.nodes.map(image => {
                return (
                  <div key={image.id} className="col-lg-3 col-md-4 col-sm-6">
                    <Image
                      fluid={image.childImageSharp.fluid}
                      alt="Gallery"
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Gallery
