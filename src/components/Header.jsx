import React, { Fragment } from "react"
import styled from "styled-components"

export default function Header() {
  return (
    <S.Wrapper>
      <S.Left>
        <img src="/images/the12bars-com.png" />
      </S.Left>
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
    align-items: space-between;
    justify-content: space-between;
    padding: 0px 10px;
  `,
  Left: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & > img {
      height: 35px;
      width: auto;
    }
  `,
  Right: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > span {
      line-height: 20px;
      color: #FFFFFF;
    }
  `,
}
