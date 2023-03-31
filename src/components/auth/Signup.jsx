import { useState } from 'react'
import Auth from './Auth'
import InputField from '../posts/InputField'

function Signup () {
  const [name, setName] = useState('')

  return (
    <div className='container'>
      <h1>New Here?</h1>
      <h2>Sign up with your email</h2>
      <form onSubmit={e => e.preventDefault()}>
        <InputField 
          id={'name'}
          value={name}
          handleChange={e => setName(e.target.value)}
        />
      </form>
      <Auth fullName={name} />
      <h4>You'll be emailed a magic link to sign up with</h4>
    </div>
  )
}

export default Signup