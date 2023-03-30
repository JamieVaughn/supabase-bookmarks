import { useState } from 'react'
import Auth from './Auth'

function Signup (props) {
  const [name, setName] = useState('')

  return (
    <div className='container'>
      <h1>New Here?</h1>
      <h2>Sign up with your email</h2>
      <form onSubmit={e => e.preventDefault()}>
        <label className="label" htmlFor='name'>Name</label>
        <div className="control">
          <input 
          id='name' 
          className="input" 
          type="text" 
          placeholder="Your Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
           />
        </div>
      </form>
      <Auth fullName={name} />
      <h4>You'll be emailed a magic link to sign up with</h4>
    </div>
  )
}

export default Signup