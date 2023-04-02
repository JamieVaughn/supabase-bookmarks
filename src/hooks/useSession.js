import { useState, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { supabase } from "../store/supabaseClient";
import { saveUser } from "../store/userSlice";

export function useSession () {
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

  return session
}