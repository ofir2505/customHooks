import React from 'react';
import useHttp from './Hooks/useHttp';


const TodoList = () => {
   const baseUrl ='https://5c920a50c6354a0014037841.mockapi.io/todo/'
   const data = useHttp(`${baseUrl}todo`);

    return (
        <div>
            <ul>
            {data.map(item =><li key={item.id}> {item.title}</li>)}
            </ul>
        </div>
    );
};

export default TodoList;