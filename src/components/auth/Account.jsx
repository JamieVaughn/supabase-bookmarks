import { useState, useEffect } from "react";
import { supabase } from "../../store/supabaseClient";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import { dbCallback } from "../lib/dbCallback";
import InputField from "../posts/InputField";

function Account(props) {
  const [loading, setLoading] = useState(false);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const { user } = useSelector(selectUser);

  console.log(user);

  const updateProfile = async (e) => {
    const updates = {
      id: user.id,
      username,
      full_name: fullname,
      updated_at: new Date(),
    };
    dbCallback(e, () => supabase.from("profiles").upsert(updates), setLoading);
  };

  if (loading) return <div className="spinner"></div>;

  return (
    <div>
      <form onSubmit={updateProfile}>
        <h1>My Profile:</h1>
        <h3>Email: {user.email}</h3>
        <InputField
          id={"username"}
          value={username}
          handleChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          title={"Full Name"}
          id={"fullname"}
          value={fullname}
          handleChange={(e) => setFullname(e.target.value)}
        />
        <div className="field">
          <button className="button is-dark is-fullwidth mt-2">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Account;
