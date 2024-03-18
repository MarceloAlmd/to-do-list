import * as Styles from "./styles";

export function EmptyTask() {
  return (
    <Styles.Container>
      <img src="./Clipboard.svg" alt="clipBoard" />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </Styles.Container>
  );
}
