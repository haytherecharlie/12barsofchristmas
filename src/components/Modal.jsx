import React, { useState, useEffect } from "react"
import styled from "styled-components"
import useGetHiResPhoto from "../hooks/useGetHiResPhoto"

export default function Modal({ selected, setSelected }) {
  const [image, closeImage] = useGetHiResPhoto(selected, setSelected)

  return (
    <S.Wrapper show={!!selected ? "flex" : "none"} onClick={closeImage}>
      <S.Modal>{image && <img src={image.data} width="100%" alt="cool image" />}</S.Modal>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: ${p => p.show};
    align-items: center;
    justify-content: center;
    position: fixed;
    height: 100vh;
    width: 100vw;
    background: rgb(0, 0, 0, 0.4);
    top: 0;
    left: 0;
    z-index: 9999999;
  `,
  Modal: styled.div`
    margin-top: -50px;
    max-width: 90%;
    max-height: 90%;
    background: #fff;
    border-radius: 20px;
    padding: 20px;
  `,
}
