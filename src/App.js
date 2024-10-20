import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import { useContext, useEffect } from "react";
import {AuthContext, FirebaseContext} from "./store/firebaseContext"
import {  onAuthStateChanged} from "firebase/auth";
import { auth } from "./firebase/config";
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import Post from "./store/postContext";

function App() {
  const {user,setUser} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        console.log(currentUser);
    });

    return () => {
        unsubscribe();
    };
}, []);
  return (
    <div>
      <Post>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<Create />} />
          <Route path="/view" element={<View/>}/>
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
