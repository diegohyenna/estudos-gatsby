import React from "react"
import Layout from "../components/Layout"
import Card from "../components/Card"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="Sobre"></SEO>
      <div className="container py-4">
        <div className="row">
          <div className="col">            
            <h1 className="mb-4">About</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-4 mb-4">
            <Card
              titleCard="Card title 1"
              textCard="Esse é um exemplo de texto para a construção de um card 1"
              colorButton="gatsby"
              textColor="yellow"
              styleDefault={true}
              srcImage="foto01.png"
            />
          </div>
          <div className="col-sm-12 col-lg-4 mb-4">
            <Card
              titleCard="Card title 2"
              textCard="Esse é um exemplo de texto para a construção de um card 2"
              colorButton="warning"
              textColor="white"
              styleDefault={false}
              srcImage="foto02.png"
            />
          </div>
          <div className="col-sm-12 col-lg-4 mb-4">
            <Card
              titleCard="Card title 3"
              textCard="Esse é um exemplo de texto para a construção de um card 3"
              colorButton="danger"
              textColor=""
              srcImage="foto03.png"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
