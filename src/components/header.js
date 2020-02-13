import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
   
      <div className="logo">
      <Link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 301.21 35.63">
        <title>Recurso 3</title><g id="Capa_2" data-name="Capa 2"><g id="Capa_1-2" data-name="Capa 1"><path class="cls-1" d="M67.18,17.34a5.42,5.42,0,0,0-3.88-1.51,5.24,5.24,0,0,0-5.42,5.42,5.24,5.24,0,0,0,5.42,5.42,5.32,5.32,0,0,0,3.88-1.54l4.3,4.24a11.54,11.54,0,1,1-.06-16.31Z"/><path class="cls-1" d="M82.16,9.71v8.21h7.32V9.71h6.07V32.79H89.48V24H82.16v8.8H76.09V9.71Z"/><path class="cls-1" d="M98.65,32.79,109.42,9.71h2.74L123,32.79H117l-1.42-3H106.1l-1.39,3Zm9.82-8.12h4.71l-2.34-5.08Z"/><path class="cls-1" d="M143.05,32.79,132.16,21.86V32.79h-6.07V9.71h2.47L139.48,20.6V9.71h6.07V32.79Z"/><path class="cls-1" d="M171.36,20.39v.86A11.54,11.54,0,1,1,168,13.06l-4.28,4.25a5.55,5.55,0,0,0-3.85-1.54,5.48,5.48,0,1,0,4.46,8.68h-4.46V20.39Z"/><path class="cls-1" d="M173.14,32.79,183.91,9.71h2.74l10.87,23.08h-6.07l-1.41-3h-9.45l-1.39,3ZM183,24.67h4.71l-2.34-5.08Z"/><path class="cls-1" d="M214,32.79l-3.57-6.12h-3.76v6.12h-6.06V9.71h9.72a8.47,8.47,0,0,1,5.76,14.71L221,32.79Zm-7.33-11.36h3.76a3.31,3.31,0,1,0,0-6.61h-3.76Z"/><path class="cls-1" d="M237.33,32.79l-3.57-6.12H230v6.12h-6.06V9.71h9.73a8.47,8.47,0,0,1,5.75,14.71l4.9,8.37ZM230,21.43h3.76a3.31,3.31,0,1,0,0-6.61H230Z"/><path class="cls-1" d="M247.26,9.71h6.07V32.79h-6.07Z"/><path class="cls-1" d="M257.48,9.68h18.19v6h-6.13V32.79h-6.06V15.71h-6Z"/><path class="cls-1" d="M289.67,9.71a11.54,11.54,0,1,1-11.51,11.57A11.57,11.57,0,0,1,289.67,9.71Zm0,6a5.51,5.51,0,1,0,5.51,5.51A5.49,5.49,0,0,0,289.67,15.74Z"/><circle class="cls-1" cx="26.09" cy="30.67" r="4.96"/><circle class="cls-1" cx="6.7" cy="19.64" r="6.69"/><circle class="cls-1" cx="35.97" cy="7.65" r="7.64"/></g></g>
        </svg>
      </Link>
      </div>
      <ul className="nav">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/404">Servicios</Link></li>
        <li><Link to="/404">Precios</Link></li>
        <li><Link to="/404">Contacto</Link></li>
        <li className="bn"><Link to="/404">Registrate</Link></li>
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
