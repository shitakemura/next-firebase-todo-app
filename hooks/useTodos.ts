import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { Todo as TodoType } from "../models/Todo";
import { useAuthContext } from "./useAuthContext";

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  const { user } = useAuthContext();
  const todosCollectionRef = collection(db, "todos");

  useEffect(() => {
    if (!user?.uid) return;

    const getTodos = async () => {
      const q = query(todosCollectionRef, where("userId", "==", user.uid));
      const snapshot = await getDocs(q);
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
  }, [user?.uid, todosCollectionRef]);

  const addTodo = async (title: string) => {
    const newTodo = {
      userId: user?.uid,
      title,
      complete: false,
      createdAt: Date.now(),
    };
    await addDoc(todosCollectionRef, newTodo);
  };

  const deleteTodo = async (todoId: string) => {
    const todoDocumentRef = doc(db, "todos", todoId);
    await deleteDoc(todoDocumentRef);
  };

  return { todos, addTodo, deleteTodo };
};
