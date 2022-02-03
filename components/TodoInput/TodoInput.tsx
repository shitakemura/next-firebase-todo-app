import { HStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useTodos } from "../../hooks/useTodos";

export const TodoInput = () => {
  const [title, setTitle] = useState("");
  const { addTodo } = useTodos();

  const handleAdd = () => {
    addTodo(title);
    setTitle("");
  };

  return (
    <HStack paddingX={8} spacing={6}>
      <Input
        borderColor='blue.500'
        borderWidth={2}
        height={12}
        width={400}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button paddingX={8} bgColor='blue.500' color='white' onClick={handleAdd}>
        Add Todo
      </Button>
    </HStack>
  );
};
