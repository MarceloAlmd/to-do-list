interface InputFormProps {
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  newTask: string;
  handleAddNewTask: () => void;
}
