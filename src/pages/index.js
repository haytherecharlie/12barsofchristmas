import React from "react"
import poster from "../assets/images/poster.jpg"

const containerStyle = {
  height: `100vh`,
  minHeight: `568px`,
  width: `100vw`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `stretch`,
}

const imageStyle = {
  flex: 1,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
}

const footerStyle = {
  width: `100vw`,
  background: `#D01C00`,
  flex: `0 0 50px`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Helvetica, Arial, sans-serif",
  color: `#fff`,
  padding: `0px 20px`,
  fontSize: `.7rem`,
}

const IndexPage = () => (
  <div style={containerStyle}>
    <div style={imageStyle}>
      <img src={poster} alt="12 bars" />
    </div>
    <footer style={footerStyle}>
      For More Information Text Charlie At: (438) 880-5966.
    </footer>
  </div>
)

export default IndexPage
