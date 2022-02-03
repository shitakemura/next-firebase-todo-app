import { VStack } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { Todo as TodoType } from "../../models/Todo";
import { Todo } from "../Todo";

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const todosCollectionRef = collection(db, "todos");
      const snapshot = await getDocs(todosCollectionRef);
      const data = snapshot.docs
        .map((doc) => {
          return {
            userId: doc.data().userId,
            id: doc.id,
            title: doc.data().title,
            complete: doc.data().complete,
            createdAt: doc.data().createdAt,
          };
        })
        .sort((a: TodoType, b: TodoType) => {
          if (a.id < b.id) {
            return 1;
          } else if (a.id > b.id) {
            return -1;
          } else {
            return 0;
          }
        });
      setTodos(data);
    };

    getTodos();
  }, []);

  return (
    <VStack w='full' paddingX={8}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </VStack>
  );
};
