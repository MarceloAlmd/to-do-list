import { StatusProps } from "./status";
import * as Styles from "./styles";

export function Status({ taskCreated, taskDone }: StatusProps) {
  return (
    <Styles.Container>
      <Styles.CreatedAndDone variantColor="blue">
        <h4>Tarefas criadas</h4> <span>{taskCreated}</span>
      </Styles.CreatedAndDone>

      <Styles.CreatedAndDone variantColor="purple">
        <h4>Concluídas</h4>{" "}
        <span>
          {taskDone} de {taskCreated}
        </span>
      </Styles.CreatedAndDone>
    </Styles.Container>
  );
}
