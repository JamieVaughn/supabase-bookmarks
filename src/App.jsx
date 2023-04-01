import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Account from "./components/auth/Account";
import PostList from "./components/posts/PostList";
import CreatePost from "./components/posts/CreatePost";
import PostDetail from "./components/posts/PostDetail";
import { supabase } from "./store/supabaseClient";
import { useDispatch } from "react-redux";
import { saveUser } from "./store/userSlice";
import "./App.css";

function App() {
  const [session, setSession] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      dispatch(saveUser(session));
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      dispatch(saveUser(session));
    });
  }, []);

  return (
    <BrowserRouter>
      <main className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<PostList />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/account" element={<Account />} />
            <Route path="/create" element={<CreatePost session={session} />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
