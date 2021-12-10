import React, { Fragment } from "react"
import styled, { createGlobalStyle } from "styled-components"
import Helmet from "react-helmet"
import TakePhoto from "../components/TakePhoto"
import ImageGallery from "../components/ImageGallery"
import Header from "../components/Header"
import Loading from "../components/Loading"
import Countdown from "../components/Countdown"
import useStartDate from "../hooks/useStartDate"
import useLoading from "../hooks/useLoading"

export default function IndexPage() {
  const [started, startDate] = useStartDate()
  const [loading, setLoading] = useLoading()

  return (
    <S.Wrapper>
      <S.GlobalStyle />
      <Helmet>
        <title>12 Bars of Xmas | 2021</title>
        <meta name="theme-color" content="#ff2353" />
        <meta property="og:title" content="12 Bars of Christmas London | 2021" />
        <meta property="og:url" content="https://twelvebars.web.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Tis the season to commence our drinkin'." />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/rcharleshay/twelvebars-com/master/src/assets/images/poster.jpg"
        />
      </Helmet>
      <Loading loading={loading} />
      <Header />
      {started ? (
        <Fragment>
          <ImageGallery setLoading={setLoading} />
          <TakePhoto />
        </Fragment>
      ) : (
        <Countdown date={startDate} />
      )}
    </S.Wrapper>
  )
}

const S = {
  GlobalStyle: createGlobalStyle`
  @font-face {
    font-family: 'Cocogoose';
    src: url('/fonts/cocogoose.otf');
  }
  
  html, body, #___gatsby {
    margin: 0;
    min-height: 100vh;
    width: 100vw;
    background: #F8F8F8;
    font-family: Cocogoose, Helvetica, sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }
  `,
  Wrapper: styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex: 1 0 0px;
    align-items: flex-start;
    justify-content: stretch;
  `,
}
