import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Navbar, Nav } from "react-bootstrap"

const Menu = () => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 35, height: 35) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="/">
        <Image fixed={logo.childImageSharp.fixed} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Link
              to="/"
              className="nav-link"
              activeStyle={{ color: "#9963ba" }}
              // activeClassName={"active"}
            >
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/gallery"
              className="nav-link"
              activeStyle={{ color: "#9963ba" }}
              // activeClassName={"active"}
            >
              Galeria
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/about"
              className="nav-link"
              activeStyle={{ color: "#9963ba" }}
              // activeClassName={"active"}
            >
              Sobre
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link
              to="/contact"
              className="nav-link"
              activeStyle={{ color: "#9963ba" }}
              // activeClassName={"active"}
            >
              Contato
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
