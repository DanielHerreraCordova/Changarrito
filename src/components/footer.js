import { Link } from "gatsby"
import React from "react"
import "./footer.css"

const Footer = () => (
  <footer>
    <div className="footer">
        <section className="made">
            © {new Date().getFullYear()}, Develop
            {` Changarrito.com`}
        </section>
            <ul className="mapSite">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/404">Servicios</Link></li>
                <li><Link to="/404">Precios</Link></li>
                <li><Link to="/404">Contacto</Link></li>
            </ul>
        <section>
        <ul className="mapSite">
                <li><Link to="/404">Facebook</Link></li>
                <li><Link to="/404">Instagram</Link></li>
                <li><Link to="/404">Twitter</Link></li>
                <li><Link to="/404">Telefono</Link></li>
            </ul>
        </section>
    </div>
  </footer>
)
export default Footer
