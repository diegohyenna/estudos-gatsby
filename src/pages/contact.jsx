import React from "react"
import Layout from "../components/Layout"
import * as Styled from "../styles/pages/contactStyle"
import Icons from "../components/Icons"
import SEO from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contato"></SEO>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-4">Contact</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 mb-5">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="Seu nome"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail"
                  placeholder="Seu email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputDescription">
                  Assunto
                </label>
                <textarea
                  className="form-control"
                  id="exampleInputDescription"
                  rows={3}
                  defaultValue={""}
                  placeholder="Diga alguma coisa..."
                />
              </div>

              <button type="submit" className="btn btn-success">
                Enviar
              </button>
            </form>
          </div>
          <div className="col-sm-12 col-md-6">
            <ul className="list-group">
              <li className="list-group-item">
                <Styled.EmailWrapper color="#9c69ac" width="35px" /> Email
              </li>
              <li className="list-group-item">
                <Styled.PhoneWrapper warning /> Telefone
              </li>
              <li className="list-group-item">
                <Icons.LocationOn style={{ width: "40px" }} /> Localização
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
