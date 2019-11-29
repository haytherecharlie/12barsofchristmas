import "../assets/global.css"
import React from "react"
import Helmet from 'react-helmet'
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

const imageContainerStyle = {
  flex: 1,
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
}

const imageStyle = {
  width: `100%`
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
    <Helmet>
      <title>12 Bars of Xmas | 2019</title>
      <meta property='og:title' content='12 Bars of Christmas London | 2019' />
      <meta property='og:url' content='https://barsofchristmas.firebaseapp.com/' />
      <meta property='og:type' content='website' />
      <meta property='og:description' content="Tis the season to commence our drinkin'." />

    </Helmet>
    <div style={imageContainerStyle}>
      <img style={imageStyle} src={poster} alt="12 bars" />
    </div>
    <footer style={footerStyle}>
      For More Information Text Charlie At: (438) 880-5966.
    </footer>
  </div>
)

export default IndexPage
