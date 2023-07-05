// styles
import './App.css';

// components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import NewUserForm from './components/newuser/NewUserForm';
import UserList from './components/userlist/Userlist';

// hooks
import {useState} from 'react';

//************************************************************************************************

function App () {
  const [users, setUsers] = useState ([]);
  
  //************************************************************************************************
  
  // delete fundction
  const deleteUser = (id) => {
    // console.log(id)
    setUsers ((prev) => {
      return prev.filter ((user) => {
        return user.id !== user.id;
      })
    })
  }
  
  const [showModal, setShowModal] = useState (false);
  
  //************************************************************************************************
  
  // close modal function
  const closeModal = e => {
    if (e.target.className === 'overlay') setShowModal (false);
    if (e.key === 'Escape') setShowModal (false);
  };
  
  //************************************************************************************************
  
  //add user
  const addUser = user => {
    setUsers (prev => {
      return [...prev, user];
    });
    setShowModal (false);
  };
  
  // ****************************************************************
  
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length}/>
        <main>
          {!users.length && <div className='no-users'>
            <h2>No users</h2>
          </div> }
          <UserList users={users} deleteUser={deleteUser} />
        </main>
      <Footer/>
      {showModal && <NewUserForm addUser={addUser}/>}
      <button onClick={() => setShowModal(true)} className='create-user'>Create User</button>
    </div>
  )
}

export default App

  