import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as Styled from "./styled"

const Footer = () => {
  const {
    site: {
      siteMetadata: {
        copyright,
        description,
        socialMedia: { github, linkedin },
      },
    },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
          description
          socialMedia {
            github
            linkedin
          }
        }
      }
    }
  `)

  return (
    <div className="bg-dark">
      <div className="container">
        <div className="row text-white py-4 mt-5">
          <div className="col-6">{description}</div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <a href={github} rel="noopener noreferrer" target="_blank">
              <Styled.GithubIcon></Styled.GithubIcon>
            </a>
            <a href={linkedin} rel="noopener noreferrer" target="_blank">
              <Styled.LinkedinIcon></Styled.LinkedinIcon>
            </a>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row bg-gray-dark text-white py-3">
          <div className="col-12 d-flex justify-content-center">
            {copyright}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
