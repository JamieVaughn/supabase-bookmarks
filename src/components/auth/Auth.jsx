import { useState } from 'react'
import { supabase } from './supabaseClient'

function Auth (props) {
  const { fullName } = props
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      let { error } = await supabase.auth.signInWithOtp({
        email
      })
    } catch(err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    {loading ? 
      <div>
        <div className="spinner"></div>
        <span>Sending Magin Link... <br />Check you email</span>
      </div>
    : (
      <form onSubmit={handleLogin}>
      <div className="field">
        <label className="label" htmlFor='email'>Email</label>
        <div className="control">
          <input 
          id='email' 
          className="input" 
          type="text" 
          placeholder="Provide your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
           />
        </div>
      </div>
      <div className="field">
        <button className='button is-primary is-fullwidth'>Send Magic Link</button>
      </div>
    </form>
    )}
    </>
  )
}

export default Auth