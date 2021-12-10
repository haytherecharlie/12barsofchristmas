import React from "react"
import styled from "styled-components"

export default function Header() {
  return (
    <S.Wrapper>
      <S.Logo src="/images/wreath.png" />
      <S.Title>
        <span>Twelve</span>
        <span>Bars</span>
      </S.Title>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    border-top: 5px solid #0da594;
    position: fixed;
    top: 0;
    height: 60px;
    width: 100vw;
    background-color: #ff2353;
    display: flex;
    flex-direction: row;
  `,
  Logo: styled.img`
    height: 50px;
    width: 50px;
  `,
  Title: styled.div`
    display: flex;
    height: 100%;
    font-family: cocogoose;
    flex-direction: column;
    color: #fff;
    align-items: flex-start;
    justify-content: center;
    & > span:last-child {
        margin-top: -12px;
        font-size: 24px;
        & > span {
            font-size: 10px;
        }
    }
  `,
}
