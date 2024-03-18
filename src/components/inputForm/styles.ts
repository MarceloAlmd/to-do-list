import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 46rem;
  margin: -1.8rem auto 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0 1rem;

  > input {
    width: 100%;
    border: 0;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.base["gray-500"]};
    color: ${(props) => props.theme.base["gray-100"]};

    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.base["gray-300"]};
    }
  }

  > button[type="button"] {
    width: 5.625rem;
    height: 3.25rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    border: 0;
    border-radius: 0.5rem;

    color: ${(props) => props.theme.base["gray-100"]};
    background: ${(props) => props.theme.product.blueDark};

    transition: background-color 0.5s;

    cursor: pointer;

    svg {
      ${(props) => props.theme.base["gray-100"]};
      width: 19px;
      height: 19px;
    }

    &:hover {
      background: ${(props) => props.theme.product.blue};
    }
  }
`;
