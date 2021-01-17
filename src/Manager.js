import React, { useState, useEffect } from 'react';
import App from './App';
import Login from './login/Login';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import firebase from './firebase';

const Manager = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const signInWithGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        try{
            console.log('trying');
            firebase.auth().signInWithRedirect(provider);
        }
        catch (e) {
            console.log(e);
        }
    };
    const logout = () => {
        firebase.auth().signOut();
        setLoggedIn(false);
    }
    useEffect(() => {
        console.log(loggedIn);
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser){
                setLoggedIn(true);
            }
        });
    }, [loggedIn]);
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    {loggedIn ?  <App handleLogout={logout}/>: <Redirect to="/login" />}
                </Route>
                <Route exact path="/login">
                    {loggedIn ? <Redirect to="/" /> : (
                    <Login 
                        isLoggedIn={loggedIn} 
                        handleSignInGoogle={signInWithGoogle}/>)}
                </Route>
            </Switch>
        </Router>
    )
}
export default Manager;