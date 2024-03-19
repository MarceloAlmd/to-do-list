import { Check, Circle, Trash } from "phosphor-react";
import * as Styles from "./styles";
import { TaskCompProps } from "./task";

export function Task({
  taskDescription,
  handleRemoveTask,
  handleCheckTask,
  handleUncheckTask,
  status,
}: TaskCompProps) {
  return (
    <Styles.Container status={status}>
      {status === "progress" ? (
        <button type="button" className="circle" onClick={handleCheckTask}>
          <Circle size={18} />
        </button>
      ) : (
        <button type="button" className="check" onClick={handleUncheckTask}>
          <Check size={17} />
        </button>
      )}

      <span className="task">{taskDescription}</span>
      <button type="button" onClick={handleRemoveTask}>
        <Trash />
      </button>
    </Styles.Container>
  );
}
