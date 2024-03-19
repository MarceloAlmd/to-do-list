export interface TaskCompProps {
  taskDescription: string;
  status: "done" | "progress";
  handleRemoveTask: () => void;
  handleCheckTask: () => void;
  handleUncheckTask: () => void;
}
