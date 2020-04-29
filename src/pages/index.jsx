import React, { useEffect } from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Images from "../components/Images"

import * as $ from 'jquery'

const IndexPage = () => {
  useEffect(() => {
    $(".carousel").carousel({
      interval: 4000,
    })
  }, [])

  return (
    <Layout>
      <SEO title="Home" description="Bem vindo" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 px-6 d-flex justify-content-center">
            <div
              id="carouselExampleIndicators"
              className="carousel slide w-50"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Images
                    srcImage="foto01.png"
                    className="d-block w-50"
                    alt="foto 01"
                  />
                </div>
                <div className="carousel-item">
                  <Images
                    srcImage="foto02.png"
                    className="d-block w-50"
                    alt="foto 02"
                  />
                </div>
                <div className="carousel-item">
                  <Images
                    srcImage="foto03.png"
                    className="d-block w-50"
                    alt="foto 03"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          <div className="col">
            <h1 className="mb-4">Home</h1>
            <p>Welcome to your new Gatsby site.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
