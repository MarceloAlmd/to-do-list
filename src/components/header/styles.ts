import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 12.5rem;
  background: ${(props) => props.theme.base["gray-700"]};

  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 7.875rem;
    height: 3rem;
  }
`;
