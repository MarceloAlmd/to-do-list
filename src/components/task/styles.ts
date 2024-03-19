import styled, { css } from "styled-components";

interface TaskProps {
  status: "done" | "progress";
}

export const Container = styled.div<TaskProps>`
  width: 100%;
  max-width: 44rem;
  margin: 1.5rem auto -0.75rem;

  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.typography.sizes.EM};

  padding: 1rem;

  background: ${(props) => props.theme.base["gray-500"]};

  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.base["gray-400"]};

  .task {
    flex: 1;

    ${(props) =>
      props.status === "done" &&
      css`
        text-decoration: line-through;

        color: ${props.theme.base["gray-300"]};
      `}
  }

  > .circle {
    border: 0;
    border-radius: 50%;
    background-color: transparent;

    line-height: 0;

    cursor: pointer;

    > svg {
      color: ${(props) => props.theme.product.blue};
      width: 100%;
      height: 100%;

      font-size: 1.2rem;
      transition: color 0.4s;
    }
  }

  > .check {
    border: 0;

    line-height: 0;
    background: transparent;

    cursor: pointer;
    border-radius: 50%;

    margin-left: 1px;

    > svg {
      color: ${(props) => props.theme.base["gray-100"]};
      background-color: ${(props) => props.theme.product.purpleDark};
      border-radius: 50%;

      font-size: 1.2rem;
      transition: color 0.4s;
    }
  }

  > button[type="button"]:last-child {
    border: 0;
    background-color: transparent;

    line-height: 0;

    cursor: pointer;

    > svg {
      color: ${(props) => props.theme.base["gray-300"]};

      font-size: 1.2rem;
      transition: color 0.4s;
    }

    &:hover {
      svg {
        color: ${(props) => props.theme.feedback.danger};
      }
    }
  }
`;
