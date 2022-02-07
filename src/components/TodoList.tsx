import React, {useEffect} from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const TodoList: React.FC = () => {
    const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)
    const {fetchTodos} = useActions(); 

    useEffect(()=> {
        fetchTodos(page, limit); 
    }, []); 

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div >
            {todos.map(todo=> 
                <div key={todo.id}>{todo.id} - {todo.title} </div>
                )}
        </div>
    );
};

export default TodoList;