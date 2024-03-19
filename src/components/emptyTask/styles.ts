import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 44rem;
  margin: 4.5rem auto 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 0.5rem;

  border-top: 1px solid ${(props) => props.theme.base["gray-400"]};

  padding: 4rem;

  gap: 1rem;

  > div {
    text-align: center;

    p:first-child {
      color: ${(props) => props.theme.base["gray-300"]};
      font-weight: ${(props) => props.theme.typography.weights.bold};
    }

    p:last-child {
      color: ${(props) => props.theme.base["gray-300"]};
    }
  }
`;
