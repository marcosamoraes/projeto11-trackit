import styled from "styled-components";
import {Link as LinkComponent} from 'react-router-dom';

export const Container = styled.div`
  height: 100vh;
  padding: 60px 30px;
  text-align: center;

  > img {
    height: 180px;
  }

  button {
    margin-bottom: 15px;
  }
`

export const Link = styled(LinkComponent)`
  font-size: 14px;
  text-align: center;
  color: #52B6FF;
`