import TodoListItem from "./TodoListItem";
import '../styles/TodoList.scss';

import React from 'react';

const TodoList = () => {
    return (
        <div className="TodoList">
            <TodoListItem />
            <TodoListItem />
            <TodoListItem />
        </div>
    );
};

export default TodoList;