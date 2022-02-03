import { VStack } from "@chakra-ui/react";
import { Todo } from "../Todo";
import { useTodos } from "../../hooks/useTodos";

export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <VStack w='full' paddingX={8}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </VStack>
  );
};
