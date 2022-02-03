import { VStack } from "@chakra-ui/react";
import { TodoInput } from "../TodoInput";
import { TodoList } from "../TodoList";

export const Home = () => {
  return (
    <VStack w='full' spacing={16} paddingX={48}>
      <TodoInput />
      <TodoList />
    </VStack>
  );
};
