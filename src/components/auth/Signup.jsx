import Auth from './Auth'

function Signup () {
  return (
    <div>
      <header>
        <h1>New Here?</h1>
        <h2>Sign up with your email</h2>
      </header>
       <Auth />
      <h4>You'll be emailed a magic link to sign up with</h4>
    </div>
  )
}

export default Signup