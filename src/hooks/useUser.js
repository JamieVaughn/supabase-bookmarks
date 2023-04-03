import { useState, useEffect } from 'react'
import { supabase } from '../store/supabaseClient';

export function useUser (id) {
  const [err, setErr] = useState(null)
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      let { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single()
      error ? setErr(error) : setUserData(data)
    };
    if(id) getUser();
  }, [id]);

  return { userData, err }
}
