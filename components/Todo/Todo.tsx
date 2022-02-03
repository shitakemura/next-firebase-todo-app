import { useState } from "react";
import { Checkbox, HStack, Text } from "@chakra-ui/react";
import { Todo as TodoType } from "../../models/Todo";
import { DeleteIcon } from "@chakra-ui/icons";

type TodoProps = {
  todo: TodoType;
};

export const Todo = ({ todo }: TodoProps) => {
  const [isChecked, setIsChecked] = useState(todo.complete);
  return (
    <HStack
      borderColor='blue.300'
      borderWidth={1}
      p={8}
      w='full'
      height='16'
      justify='space-between'
      spacing={8}>
      <HStack spacing={8}>
        <Checkbox
          size='lg'
          isChecked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <Text
          textDecoration={isChecked ? "line-through" : undefined}
          color={isChecked ? "gray.500" : "black"}>
          {todo.title}
        </Text>
      </HStack>
      <DeleteIcon color='blue.500' boxSize={5} _hover={{ boxSize: "6" }} />
    </HStack>
  );
};
