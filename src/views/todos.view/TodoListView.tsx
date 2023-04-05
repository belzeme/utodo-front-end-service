import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import UglyListItem from '../../components/ListItem';
import { useEffect } from 'react';
import { api } from '../../api/todos';

const TodoListView = () => {
  const [todos, setTodos] = useState<Array<{title: string}>>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await api.getAll()() as Array<{title: string}>;
      setTodos(response ?? []);
    }
    fetchTodos();
  }, []);

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="main mailbox folders">
        <List>
          {todos.map(todoItem => <UglyListItem text={todoItem.title} />)}
        </List>
      </nav>
    </Box>
  );
};

export default TodoListView;
