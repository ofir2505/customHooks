import React from 'react';

const ChoiceSelection = (props)=> {
        return (
            <div>
            <button onClick={()=>props.onClick('todo')}> Todos </button>
            <button onClick={()=>props.onClick('users')}> Users</button>
            </div>
        );
     
}

export default ChoiceSelection;