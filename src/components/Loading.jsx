import React from "react"
import styled from "styled-components"
import wreath from "../assets/images/wreath.png"

export default function Loading({ loading }) {
  return (
    <S.Wrapper show={loading ? "flex" : "none"}>
      <S.Wreath src={wreath} alt="loading" />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    display: ${p => p.show};
    z-index: 99999;
    background: #f8f8f8;
    position: absolute;
    top: 0;
    bottom: 0;
    height: 90vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
  `,
  Wreath: styled.img`
    marginTop: -50px,
    height: 100px;
    width: 100px;
    transform: scale(1);
    animation: pulse 1s infinite;
    @keyframes pulse: {
      0%: {
        transform: scale(0.8);
      },
      70%: {
        transform: scale(1);
      },
      100%: {
        transform: scale(0.8);
      }
    }
  `,
}
