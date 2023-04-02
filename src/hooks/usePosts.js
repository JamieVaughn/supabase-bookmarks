import { useState, useEffect } from 'react'
import { supabase } from "../store/supabaseClient";
import { useSelector } from "react-redux";
import { selectAuthed } from "../store/userSlice";

export function usePosts () {
  const isAuthed = useSelector(selectAuthed);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPosts() {
      setError(null)
      let { data, error } = await supabase.from("posts").select("*");
      error ? setError(error) : setPosts(data);
      setLoading(false);
    }
    isAuthed ? getPosts() : setLoading(false)
  }, [isAuthed]);

  return {
    posts,
    loading,
    error
  }
}
