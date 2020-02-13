import React from "react"
import "./services.css"
import Image1 from "./image1"
import Image2 from "./image2"
import Image3 from "./image3"
import Image4 from "./image4"
import Image5 from "./image5"
import Image6 from "./image6"

const services=()=>(
    <div className="services">
    <h1 className="titleS">Servicios</h1>
    <div class="parent">
        
        <div class="div1 color">    
            <Image1/>    
            <div class="descripcion">
                <h2>Car Wash</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div class="div2 color">
            <Image2/>
            <div class="descripcion">
                <h2>Recauderia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div class="div3 color">
            <Image3 />
            <div class="descripcion">
                <h2>Cafeteria</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div class="div4 color">
            <Image4/>
            <div class="descripcion">
                <h2>Mecanica</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eveniet temporibus. Officiis quasi ratione accusamus eligendi.</p>
                <button>ver mas</button>
            </div>
        </div>
        <div class="div5 color">
            <Image5/>
            <div class="descripcion">
                <h2>Maquinaria</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div class="div6 color">
            <Image6/>
            <div class="descripcion">
                <h2>Fotografia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
    </div>
)

export default services