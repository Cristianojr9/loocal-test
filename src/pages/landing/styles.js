import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { fadeInLeft } from 'react-animations';

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;

export const Container = styled.div``;

export const Content = styled.div`
  margin-top: 70px;

  display: flex;
  place-content: center;

  section {
    animation: 0.8s ${fadeInLeftAnimation};
    margin-right: 210px;

    span {
      font-size: 50px;
      font-style: normal;
      font-weight: 500;
      line-height: 70px;
      letter-spacing: 0em;
      text-align: left;
    }

    p {
      margin-top: 20px;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: left;
    }

    button {
      height: 60px;
      width: 250px;
      border-radius: 10px;
      margin-top: 45px;

      background: #00A536;
      border-radius: 10px;
      border-color: transparent;
      font-size: 16px;
      color: #FFFFFF;

      box-shadow: 0px 10px 55px rgba(0, 165, 54, 0.35);
      transition: 0.5s;

      &:hover {
        background: ${shade(0.2, '#00A536')};
      }
    }
  }
`;

export const CenterInfo = styled.div`
  width: 65%;
  height: 170px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 120px;
  margin-left: 17%;
  position: absolute;

  box-shadow: 0px 10px 55px #1111;

  div {
    display: flex;
    align-items: center;
    position: relative;

    &:after {
      content: '';
      height: 125.57px;
      border: 1px solid #EEEFF2;
      position: absolute;
      margin-left: 150%;
    }

    &:last-child {
      &:after {
        display: none;
      }
    }

    ul {
      list-style:none;
      margin-left: 20px;
    }

    li {
      text-decoration: none;
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 30px;
      color: #4F5665;

      span {
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 30px;
        color: #0B132A;
      }
    }
  }

  button {
    width: 373px;
    height: 60px;
    background: #00A536;
    border-radius: 10px;
    color: #fff;
    border-color: transparent;
    box-shadow: 0px 10px 55px rgba(0, 165, 54, 0.35);
    transition: 0.5s;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;

    &:hover {
      background: ${shade(0.2, '#00A536')};
    }
  }

`;

export const SectionAdvantage = styled.div`
  margin-top: 25%;

  display: flex;
  place-content: center;

  img {
    margin-right: 5%;
  }

  div {
    margin-left: 5%;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 50px;
    color: #0B132A;
  }

  p {
    margin-top: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #4F5665;
  }

  ul {
    list-style: none;
    margin-top: 10px;

    li {
      display: flex;
      align-items: center;

      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 30px;
      color: #4F5665;
      padding: 0 0 15px;

      img {
        margin-right: 12px;
      }
    }
  }
`;