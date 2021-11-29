import "../assets/global.css"
import React, { useEffect, useState } from "react"
import Helmet from "react-helmet"
import ImageUpload from "../components/ImageUpload"
import ImageGallery from "../components/ImageGallery"
import Header from "../components/Header"
import Loading from "../components/Loading"
import Poster from "../components/Poster"

const containerStyle = {
  paddingTop: "84px",
  minHeight: `100vh`,
  width: `100vw`,
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  justifyContent: `stretch`,
}

const IndexPage = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  return (
    <div style={containerStyle}>
      <Helmet>
        <title>12 Bars of Xmas | 2021</title>
        <meta property="og:title" content="12 Bars of Christmas London | 2021" />
        <meta property="og:url" content="https://barsofchristmas.firebaseapp.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Tis the season to commence our drinkin'." />
        <meta property="og:image" content="https://raw.githubusercontent.com/haytherecharlie/12barsofchristmas/master/src/assets/images/poster.jpg" />
      </Helmet>
      <Loading loading={loading} />
      {/* <Poster /> */}
      <Header />
      <ImageUpload />
      <ImageGallery setLoading={setLoading} />
    </div>
  )
}

export default IndexPage
