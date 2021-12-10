import React from "react"
import CameraIcon from "react-ionicons/lib/IosCamera"
import styled from "styled-components"
import useTakePhoto from "../hooks/useTakePhoto"

export default function TakePhoto() {
  const [uploadPhoto] = useTakePhoto()

  return (
    <S.Wrapper>
      <S.TakePhoto>
        <S.HiddenInput type="file" onChange={uploadPhoto} accept="image/*" capture="camera" />
        <CameraIcon color="#fff" fontSize="24px" />
        <span>TAKE PHOTO</span>
      </S.TakePhoto>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 90px;
    width: 100vw;
    background: #ff2353;
    border-bottom: 10px solid #0da594;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  TakePhoto: styled.label`
    height: 50px;
    width: 300px;
    border: 2px solid #ffffff;
    border-radius: 5px;
    background: #0da594;
    display: flex;
    align-items: center;
    justify-content: center;
    & > span {
      margin-left: 5px;
      color: #fff;
      font-size: 20px;
      font-family: cocogoose;
    }
  `,
  HiddenInput: styled.input`
    display: none;
  `,
}
