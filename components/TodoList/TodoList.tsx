import { VStack } from "@chakra-ui/react";
import { Todo as TodoType } from "../../models/Todo";
import { Todo } from "../Todo";

export const TodoList = () => {
  const todos: TodoType[] = [
    {
      userId: "user001",
      id: "fdjla",
      title: "first todo",
      complete: false,
      createdAt: 34278932,
    },
    {
      userId: "user001",
      id: "fdjlafdkofew",
      title: "second todo",
      complete: true,
      createdAt: 34278932,
    },
  ];

  return (
    <VStack w='full' paddingX={8}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </VStack>
  );
};
