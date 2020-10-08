import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  margin-top: 120px;

  h1 {
    text-align: center;
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 50px;
    text-align: center;
    color: #0B132A;
  }

  span { 
    margin-top: 15px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #4F5665;
  }
`;

export const ListComments = styled.div`
  display: flex;
  margin-top: 60px;
  
  ul {
    height: 200px;
    width: 400px;
    border-radius: 10px;

    background: #FFFFFF;
    border: 2px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 10px;
    list-style: none;
    margin-right: 50px;
    cursor: pointer;

    &:hover {
      border: 2px solid #00A536;
    }

    section {
      display: flex;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-left: 40px;
      margin-top: 10px;
    }

    span { 
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 30px;

      text-align: left;
      display: flex;
      align-items: center;
      justify-content: center;

      color: #0B132A;
    }
  }
`;

export const ProfileContent = styled.div`
  margin-left: 10px;

  li {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    /* or 214% */

    display: flex;
    align-items: center;
    text-align: center;
    margin-top: -5px;
    color: #4F5665;

    span {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 30px;
      /* or 167% */

      display: flex;
      align-items: center;
      text-align: center;

      color: #0B132A;
    }
  }
`;

export const ContentStar = styled.div`
  display: flex;


  p {
    margin-top: 25px;
    margin-left: 40px;
  }
`;
