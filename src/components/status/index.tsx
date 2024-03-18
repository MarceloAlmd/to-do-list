import * as Styles from "./styles";

export function Status() {
  return (
    <Styles.Container>
      <Styles.CreatedAndDone variantColor="blue">
        <h4>Tarefas criadas</h4> <span>0</span>
      </Styles.CreatedAndDone>

      <Styles.CreatedAndDone variantColor="purple">
        <h4>Concluídas</h4> <span>0 de 0</span>
      </Styles.CreatedAndDone>
    </Styles.Container>
  );
}
