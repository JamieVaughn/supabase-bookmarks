import { useState, useEffect } from 'react'
import { supabase } from "../../store/supabaseClient";

export function usePosts (isAuthed) {
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