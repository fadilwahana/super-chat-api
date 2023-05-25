import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyC-rT0EatKlTqmqCekj42G6Tx0fBIvYo4o",
  authDomain: "super-chat-api-test-project.firebaseapp.com",
  projectId: "super-chat-api-test-project",
  storageBucket: "super-chat-api-test-project.appspot.com",
  messagingSenderId: "111136872218",
  appId: "1:111136872218:web:978da84718b062da71bea3",
  measurementId: "G-X248QD7XJW"
})

function App() {

  const [user] = useAuthState();

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <section>
          {user ? <ChatRoom /> : <SignIn />}
        </section>

    </div>
  );
}

function SignIn () {

  return(
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

export default App;
