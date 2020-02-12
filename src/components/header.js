import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <h1 style={{ marginTop: 10,
                    marginBottom:0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul className="nav">
        <li><Link to="/404">ABOUT</Link></li>
        <li><Link to="/404">HOME</Link></li>
        <li><Link to="/404">PRICES</Link></li>
        <li><Link to="/404">CONTACT</Link></li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
