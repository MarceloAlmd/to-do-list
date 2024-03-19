import { PlusCircle } from "phosphor-react";
import * as Styles from "./styles";

export function InputForm({
  setNewTask,
  newTask,
  handleAddNewTask,
}: InputFormProps) {
  return (
    <Styles.Container>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button type="button" onClick={handleAddNewTask}>
        Criar
        <PlusCircle />
      </button>
    </Styles.Container>
  );
}
