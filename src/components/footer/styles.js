import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 560px;
  margin-top: 290px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  section {
    display: flex;

    ul {
      list-style: none;
      margin-left: 40px;

      li {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 30px;
        /* identical to box height, or 187% */


        color: #4F5665;
      }
    }

    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
      /* identical to box height, or 167% */
      color: #0B132A;
    }
  }

  div {
    height: 60px;
    display: grid;
    margin-top: -6%;

    ul { 
      margin-top: 50px;
      margin-left: -20px;
      display: flex;
      list-style: none;

      img {
        cursor: pointer;
      }
    }
  }
`;
