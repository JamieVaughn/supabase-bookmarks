import { useState, useEffect } from 'react'
import { supabase } from '../auth/supabaseClient'
import { useSelector } from 'react-redux'
import { selectUser } from '../auth/userSlice'

function Account (props) {
  const [loading, setLoading] = useState(false)
  const [fullname, setFullname] = useState(null)
  const [username, setUsername] = useState(null)
  const { user } = useSelector(selectUser)

  console.log(user)

  const updateProfile = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const updates = {
        id: user.id,
        username,
        full_name: fullname,
        updated_at: new Date()
      }
      let { error } = await supabase.from('profiles').upsert(updates)
      if(error) throw error
    } catch(err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }
  if(loading) return <div className="spinner"></div>

  return (
    <div>
      <form onSubmit={updateProfile}>
        <h1>My Profile:</h1>
        <h3>Email: {user.email}</h3>
        <div className="field">
          <label className="label" htmlFor='username'>Username</label>
          <div className="control">
            <input 
            required
            id='username' 
            className="input" 
            type="text" 
            placeholder="Provide your username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label" htmlFor='fullname'>Fullname</label>
          <div className="control">
            <input 
            required
            id='fullname' 
            className="input" 
            type="text" 
            placeholder="Provide your fullname"
            value={fullname}
            onChange={e => setFullname(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
        <button className='button is-dark is-fullwidth mt-2'>Submit</button>
      </div>
      </form>
    </div>
  )
}

export default Account