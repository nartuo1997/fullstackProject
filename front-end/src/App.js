import React, { useState } from 'react';

import { selectUser } from './store/userSlice';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';
//import router
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

//import file
import Navigation from './component/Navigation';
import Login from './component//Login/Login';
import Logout from './component/Logout/Logout';
import Home from './component/HomePage/Home';
import SignUp from './component/SignUp/SignUp';
import NotFoundPage from './NotFound/NotFoundPage';
import About from './component/HomePage/About';
import Resource from './component/Resource/Resource';
import Project from './component/Project/Project';



//import action
// import { selectSong } from './action'


const App = (props) => {

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

  // check tutorial about ProtectedRoute
  // check for isLoggedIn flag
  // console.log('App isLoggedIn', props.isLoggedIn);

  return (
    <div>
      {/* <SongList></SongList> */}
      <BrowserRouter>
        <Navigation isLoggedIn={props.isLoggedIn} name={props.userName} />
        {/* <Route path="/" exact component={PageOne}></Route> */}

        {
          !props.isLoggedIn ?   // if not logged in
            <Switch>
              <Route path="/login" exact component={Login}></Route>
              <Route path="/signup" exact component={SignUp}></Route>
              <Redirect to='/login' />
            </Switch>
            :
            <Switch>
              <Redirect path='/login' exact to='/resource' />
              <Route path="/" exact component={Home}></Route>
              <Route path="/about" exact component={About}></Route>
              <Route path="/resource" exact component={Resource}></Route>
              <Route path="/project" exact component={Project}></Route>
              <Route path='*' component={NotFoundPage}></Route>
            </Switch>
        }
        {/* <Route path="/login" >{user ? <Logout /> : <Login />}</Route> */}

      </BrowserRouter>


    </div >
  );
}


export default connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn, userName: state.auth.userName })
)(App);
