import { useState, useEffect } from 'react'
import { supabase } from "../../store/supabaseClient";

export function usePost(id) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPost() {
      setError(null)
      let { data: post, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", id)
        .single();
      error ? setError(error) : setPost(post);
      setLoading(false)
    }
    getPost();
  }, []);

  return {
    post,
    loading,
    error
  }
}