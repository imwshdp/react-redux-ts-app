import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';


const TodoList: React.FC = () => {

  // GET STORE STATE
  const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)
  
  // GET DISPATCH BINDED ACTIONS
  const {fetchTodos, setTodoPage} = useActions()

  // PAGES
  const pages = [1, 2, 3, 4, 5]

  useEffect( () => {
    // DISPATCH ACTION CREATOR
    fetchTodos(page, limit)
  }, [page])

  if(loading) {
    return(
      <>
        <h1>Todos List</h1>
        <h2>Идет загрузка...</h2>
      </>
    )
  }

  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <h1>Todos List</h1>
      <div>
        {todos.map(todo =>
          <div key={todo.id}>{todo.id}. {todo.title}</div>
        )}
        
        <div style={{display: 'flex'}}>
          {pages.map(p => 
            <div
              onClick={ () => {setTodoPage(p)}}
              style={{border: p == page ? '2px solid brown' : '1px solid gray', padding: '3px 8px 3px 8px', marginTop: '10px'}}
            >{p}</div>
          )}
        </div>

      </div>
    </>
  );
}

export default TodoList;