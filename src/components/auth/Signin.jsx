import Auth from './Auth'

function Signin () {
  return (
    <div>
      <header>
        <h1>Welcome back!</h1>
        <h2>Sign in with your email</h2>
        <sup>You'll be emailed a magic link to sign in with</sup>
      </header>
      <Auth />
    </div>
  )
}

export default Signin