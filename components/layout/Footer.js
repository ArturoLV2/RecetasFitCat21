/** @format */

import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li>
            <a href="#">
              <img src="/static/img/Logo-Facebook-01.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/static/img/Logo-Instagram-01.svg" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/static/img/Logo-WhatsApp-01.svg" alt="" />
            </a>
          </li>
        </ul>

        <div>
          <span className="AvisoLegal">
            Terminos y Condiciones | Política de Privacidad
          </span>
          <br></br>
          <span>Especialidades del Club</span>
          <br></br>
          <span>©2021</span>
        </div>

        {/* <img src="/static/img/BombonesLogo-01-01.png" alt="" /> */}
      </footer>
    </>
  );
}

export default Footer;
