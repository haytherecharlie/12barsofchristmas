import React from "react"
import styled from "styled-components"
import useNaughtyList from "../hooks/useNaughtyList"

export default function NaughtyList() {
  const [list, addAttendee, inputRef] = useNaughtyList()

  return (
    <S.Wrapper>
      <S.NaughtyList>
        <h2>{`🎄THE NAUGHTY LIST🎄`}</h2>
        <S.AddAttendee>
          <input type="text" placeholder="YOUR NAME" ref={inputRef} />
          <button type="button" onClick={addAttendee}>{`RSVP`}</button>
        </S.AddAttendee>
        <ul>{list.map((p, i) => <li key={p.id}>{`${i + 1}. ${p.name}`}</li>)}</ul>
      </S.NaughtyList>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
  `,
  NaughtyList: styled.div`
    & > h2 {
      color: #ff2353;
      text-align: center;
    }
    & > ul {
      list-style-type: none;
      text-align: center;
      padding-left: 0px;
      & > li {
        font-size: 25px;
        color: #0da594;
      }
    }
  `,
  AddAttendee: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & > input {
      background: #fff;
      border: 1px solid #ccc;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      font-size: 20px;
      padding: 0px 5px;
      height: 35px;
      font-family: cocogoose;
      color: #333;
      margin-right: 0;
      &::placeholder {
        color: #d3d3d3;
      }
    }
    & > button {
      margin-left: 0;
      height: 35px;
      border: none;
      background: #ff2353;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      font-family: cocogoose;
      color: #ffffff;
    }
  `,
}
