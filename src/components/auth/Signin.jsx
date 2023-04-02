import Auth from './Auth'

function Signin () {
  return (
    <div>
      <header>
        <h1>Welcome back!</h1>
        <h2>Sign in with your email</h2>
      </header>
      <Auth />
      <h4>You'll be emailed a magic link to sign in with</h4>
    </div>
  )
}

export default Signin