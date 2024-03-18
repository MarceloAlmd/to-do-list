import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 46rem;
  margin: 4rem auto 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  padding: 0 1rem;
`;

interface CreatedAndDoneProps {
  variantColor: "blue" | "purple";
}

export const CreatedAndDone = styled.div<CreatedAndDoneProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > h4 {
    color: ${(props) =>
      props.variantColor === "blue"
        ? props.theme.product.blue
        : props.theme.product.purple};
  }

  > span {
    background: ${(props) => props.theme.base["gray-400"]};
    color: ${(props) => props.theme.base["gray-200"]};

    font-weight: ${(props) => props.theme.typography.weights.bold};
    font-size: ${(props) => props.theme.typography.sizes.SM};

    padding: 0.2rem 0.5rem;
    border-radius: 99px;
  }
`;
