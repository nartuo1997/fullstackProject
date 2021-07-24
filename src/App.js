import React, { useState } from 'react';

import { selectUser } from './store/userSlice';
import { useSelector } from 'react-redux';

//import router
import { BrowserRouter, Route, Link } from 'react-router-dom';

//import file
import Navigation from './component/Navigation';
import Login from './component//Login/Login';
import Logout from './component/Logout/Logout';
import Home from './component/HomePage/Home';
import SignUp from './component/SignUp/SignUp';
import SongList from './component/SongList';

//import action
import { selectSong } from './action'


// this.state = {
//   name: '',
//   age: ''
// }

// this.onSubmitChange = (event) => {
//   this.setState({
//     name: event.target.value,
//     age: event.target.age
//   })
// }



function App() {





  // const [user, setUser] = useState({
  //   name: "",
  //   email: ""
  // })
  const [name, setName] = useState('')

  const user = useSelector(selectUser)

  const [error, setError] = useState("")



  // const Login = (details) => {
  //   console.log(details)

  //   if (details.email === adminUser.email && details.password === adminUser.password) {
  //     console.log("Logged in")
  //     setUser({
  //       name: details.name,
  //       email: details.email
  //     })
  //   } else {
  //     alert("User details do no match")

  //   }
  // }
  // const Logout = () => {
  //   setUser({
  //     name: "",
  //     email: ""
  //   })
  // }

  return (
    <div>
      {/* <SongList></SongList> */}
      <BrowserRouter>
        <Navigation />
        {/* <Route path="/" exact component={PageOne}></Route> */}

        <Route path="/" exact component={Home}></Route>
        <Route path="/signup" exact component={SignUp}></Route>
        <Route path="/login" >{user ? <Logout /> : <Login />}</Route>

      </BrowserRouter>


    </div>
  );
}

export default App;
