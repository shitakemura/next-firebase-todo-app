import { VStack } from "@chakra-ui/react";
import { Todo } from "../Todo";
import { useGetTodos } from "../../hooks/useGetTodos";

export const TodoList = () => {
  const { todos } = useGetTodos();

  return (
    <VStack w='full' paddingX={8}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </VStack>
  );
};
