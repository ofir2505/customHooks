import React, {useState } from 'react';
import ChoiceSelection from './ChoiceSelection';
import TodoList from './TodoList';
import UserList from './UserList';

const App =(props)=>{
const [option,selectOption] = useState('todo');

const onClick = (item)=>{
  selectOption(item);
}

  return(
    <React.Fragment>
      <ChoiceSelection onClick={onClick} />
      {(option === 'todo') ?   <TodoList/> : <UserList/>}
   
     
      </React.Fragment>
  )
}
export default App;
