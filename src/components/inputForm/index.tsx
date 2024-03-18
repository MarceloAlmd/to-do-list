import { PlusCircle } from "phosphor-react";
import * as Styles from "./styles";

export function InputForm() {
  return (
    <Styles.Container>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="button">
        Criar
        <PlusCircle />
      </button>
    </Styles.Container>
  );
}
