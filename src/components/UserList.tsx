import React, { useEffect } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

const UserList: React.FC = () => {

  // GET STORE STATE
  const {users, error, loading} = useTypedSelector(state => state.user)

  // GET DISPATCH BINDED ACTIONS
  const {fetchUsers} = useActions();

  useEffect( () => {
    // DISPATCH ACTION CREATOR
    fetchUsers()
  }, [])

  if(loading) {
    return(
      <>
        <h1>Users List</h1>
        <h2>Идет загрузка...</h2>
      </>
    )
  }

  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <h1>Users List</h1>
      <div>
        {users.map(user =>
          <div key={user.id}>{user.name}</div>
        )}
      </div>
    </>
  );
}

export default UserList;