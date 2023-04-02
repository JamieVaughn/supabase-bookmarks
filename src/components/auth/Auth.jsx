import { useState } from "react";
import { supabase } from "../../store/supabaseClient";
import InputField from "../posts/InputField";
import { dbCallback } from "../../lib/dbCallback";

function Auth() {
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
          Sending Magic Link... <br />
          Check your email
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
      <button>Send Magic Link</button>
    </form>
  );
}

export default Auth;
