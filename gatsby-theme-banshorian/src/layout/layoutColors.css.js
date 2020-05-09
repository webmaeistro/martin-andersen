import { css } from "@emotion/core"
import lineSvg from "../../static/assets/line.svg"

const styles = css`
  .e404.layout-wrapper .layout-inner {
    background: #000000;
  }
  .e404 .data-section {
    color: #ffffff;
  }
  .aboutme.layout-wrapper .layout-inner {
    background: #000000;
  }
  .aboutme .data-section {
    color: #ffffff;
  }
  .aboutme .hamburgercolr::before,
  .aboutme .hamburgercolr::after,
  .e404 .hamburgercolr::before,
  .e404 .hamburgercolr::after {
    background-color: #000000;
  }
  .home.layout-wrapper .layout-inner {
    background: #0e0f11;
    background: #0e0f11 url(${lineSvg}) center center fixed;
    background-size: contain;
  }
  .home.layout-wrapper h1,
  .home.layout-wrapper h2 {
    color: #ffffff;
  }
  .skill.layout-wrapper .layout-inner {
    color: #ffffff;
    background: #9d316e;
    background: url(${lineSvg}) center center fixed,
      linear-gradient(45deg, #9d316e, #de2d3e);
    background-size: cover;
  }
  .experience.layout-wrapper .layout-inner {
    background: #3a3d98;
    background: url(${lineSvg}) center center fixed,
      linear-gradient(45deg, #6f22b9, #3a3d98);
    background-size: cover;
  }
  .home .hamburgercolr::before,
  .home .hamburgercolr::after,
  .skill .hamburgercolr::before,
  .skill .hamburgercolr::after,
  .experience .hamburgercolr::before,
  .experience .hamburgercolr::after {
    background-color: #ffffff;
  }
  .home .btn-contact-color,
  .experience .btn-contact-color {
    color: #ffffff;
  }
  .aboutme .btn-contact-color,
  .e404 .btn-contact-color {
    color: #000000;
  }
`

export default styles
