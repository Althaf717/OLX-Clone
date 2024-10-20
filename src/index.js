import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext,AuthContext,AuthContextProvider } from './store/firebaseContext';
import {app} from './firebase/config'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <FirebaseContext.Provider value={{app}}>
    <AuthContextProvider>
    <App/>
    </AuthContextProvider>
   </FirebaseContext.Provider> 
);