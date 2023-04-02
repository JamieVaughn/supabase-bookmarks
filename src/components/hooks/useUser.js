import { useState, useEffect } from 'react'

export function useUser () {
  const [error, setError] = useState(null)
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      let { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single()
      error ? setError(error) : setUserData(data)
    };
    getUser();
  }, []);

  return userData
}