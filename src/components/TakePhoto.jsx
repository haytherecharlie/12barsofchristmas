import React from "react"
import CameraIcon from "react-ionicons/lib/LogoInstagram"
import MapIcon from "react-ionicons/lib/MdMap"
import GalleryIcon from "react-ionicons/lib/LogoBuffer"
import ContactsIcon from "react-ionicons/lib/MdPeople"
import styled from "styled-components"
import useTakePhoto from "../hooks/useTakePhoto"

export default function TakePhoto() {
  const [uploadPhoto] = useTakePhoto()

  return (
    <S.Wrapper>
      <GalleryIcon color="#fff" fontSize="35px" />
      <ContactsIcon color="#fff" fontSize="35px" />
      <S.TakePhoto>
        <S.HiddenInput type="file" onChange={uploadPhoto} accept="image/*" />
        <CameraIcon color="#fff" fontSize="35px" />
      </S.TakePhoto>
      <MapIcon color="#fff" fontSize="35px" />
      <S.QRCode src="/images/qrcode.jpg" />
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 75px;
    width: 100vw;
    background: #ff2353;
    border-bottom: 10px solid #0da594;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `,
  TakePhoto: styled.label`
    margin-bottom: 10px;
    padding: 20px 21px;
    border: 5px solid #ffffff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    background: #0da594;
    display: flex;
    align-items: center;
    justify-content: center;
    &:last-child {
      margin-left: 10px;
    }
    & > span {
      margin-left: 5px;
      color: #fff;
      font-size: 16px;
      font-family: cocogoose;
    }
  `,
  HiddenInput: styled.input`
    display: none;
  `,
  QRCode: styled.img`
    height: 30px;
    width: 30px;
  `,
}
