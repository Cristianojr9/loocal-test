import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 120px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Image = styled.div`
  cursor: pointer;
`;

export const NavLinks = styled.div`
  display: flex;

  ul {
    margin-right: 61px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
  }

  li {
    display: block;
    width: 100%;
    margin: 0px 49px;

    a:hover {
      color: #00A536;
      transition: 0.2s;
      -webkit-transition: 0.2s;
    }
  }

  a {
    text-decoration: none;
    display: block;
    color: #111;
    padding: 3px 0;
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const Button = styled.div`
  button {
    height: 45px;
    width: 239px;
    border-radius: 50px;
    border: 1px solid #00A536;
    background: transparent;
    
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    color: #00A536;
    transition: 0.2s linear;

    &:hover {
      background: #00A536;
      color: #ffff;
    }
  }
`;



