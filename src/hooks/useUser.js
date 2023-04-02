import { useState, useEffect } from 'react'
import { supabase } from '../store/supabaseClient';

export function useUser (props) {
  const [error, setError] = useState(null)
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      let { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", props.id)
        .single()
      error ? setError(error) : setUserData(data)
    };
    getUser();
  }, []);

  return userData
}
