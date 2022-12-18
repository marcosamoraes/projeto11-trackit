import styled from "styled-components";

export const ButtonEl = styled.button`
  color: white;
  background-color: #52B6FF;
  padding: 8px;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 400;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    opacity: .7;
  }
`;