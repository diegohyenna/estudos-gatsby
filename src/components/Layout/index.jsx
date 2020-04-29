import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import Menu from "../Menu"
import Footer from "../Footer"
import GlobalStyle from "../../styles/globalStyled"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Menu></Menu>
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
