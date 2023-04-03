import { useState } from "react";
import { supabase } from "../../store/supabaseClient";
import InputField from "../posts/InputField";
import { dbCallback } from "../../lib/dbCallback";
import StatusMessage from "../posts/StatusMessage";

function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false)

  const handleLogin = async (e) => {
    const { error } = await dbCallback(
      e, 
      () => supabase.auth.signInWithOtp({ email }),
      setLoading
    )
    console.log(error)
    setStatus(error ? error : {status: 200, message: 'Check your email for a login link.'})
  };

  if (loading) {
    return (
      <header>
        <div className="spinner"></div>
        <span>
          Sending Magic Link... <br />
          Check your email
        </span>
      </header>
    );
  }

  return (
    <form onSubmit={handleLogin}>
      <InputField
        id={"email"}
        value={email}
        handleChange={(e) => (setStatus(false), setEmail(e.target.value))}
      />
      { status && <StatusMessage status={status}/> }
      <button>Send Magic Link</button>
    </form>
  );
}

export default Auth;
