import { useState, useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import {
  Layout,
  Signin,
  Signup,
  PostDetail,
  PostList,
  Account,
  CreatePost
} from './components'
import { supabase } from "./store/supabaseClient";
import { useDispatch } from "react-redux";
import { saveUser } from "./store/userSlice";
import "./global.css";

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
  if(!session) {
    return (
      <Layout>
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Signin />} />
      </Layout>
    )
  }
  return (
    <Layout>
      <Route exact path="/" element={<PostList />} />
      <Route path="/account" element={<Account />} />
      <Route path="/create" element={<CreatePost session={session} />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Layout>
  );
}

export default App;
