import { useState } from "react";
import { supabase } from "../../store/supabaseClient";
import InputField from "../posts/InputField";
import { dbCallback } from "../lib/dbCallback";

function Auth(props) {
  const { fullName } = props;
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    dbCallback(e, () => supabase.auth.signInWithOtp({ email }), setLoading);
  };

  if (loading) {
    return (
      <div>
        <div className="spinner"></div>
        <span>
          Sending Magin Link... <br />
          Check you email
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin}>
      <InputField
        id={"email"}
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
      />
      <div className="field">
        <button className="button is-primary is-fullwidth">
          Send Magic Link
        </button>
      </div>
    </form>
  );
}

export default Auth;
