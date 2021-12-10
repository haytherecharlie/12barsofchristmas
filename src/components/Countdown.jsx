import React from "react"
import styled from "styled-components"
import CountdownNow from "react-countdown-now"

export default function Countdown({ date }) {
  return (
    <S.Wrapper>
      <S.Countdown>
        <h2>Twelve Bars Starts In:</h2>
        <CountdownNow
          date={date}
          renderer={d => (
            <p>
              <b>{d.days}</b>
              <span>{` Days `}</span>
              <b>{d.hours}</b>
              <span>{` Hours `}</span>
              <b>{d.minutes}</b>
              <span>{` Minutes`}</span>
              {/* Days ${d.hours} hours \n ${d.minutes} minutes`} */}
            </p>
          )}
        />
      </S.Countdown>
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    height: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  `,
  Countdown: styled.div`
    color: #0da594;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #0da594;
    border-radius: 10px;
    padding: 10px 20px;
    & > h2 {
      font-size: 20px;
      line-height: 0px;
    }
    & > p {
      margin: 0px;
      font-size: 17px;
      & > b {
        color: #ff2353;
      }
      & > span {
        color: #0da594;
      }
    }
  `,
}
