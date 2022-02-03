import { VStack } from "@chakra-ui/react";
import { TodoList } from "../TodoList";

export const Home = () => {
  return (
    <VStack w='full' spacing={16} paddingX={48}>
      <TodoList />
    </VStack>
  );
};
