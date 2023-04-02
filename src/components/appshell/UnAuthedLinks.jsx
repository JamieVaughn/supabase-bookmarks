import { NavLink } from 'react-router-dom'

function UnAuthedLinks () {

  return (
    <ul>
      <li>
        <NavLink 
        to='/signup'
        className={({isActive}) => isActive ? 'active' : ''}
        >Signup</NavLink>
      </li>
      <li>
        <NavLink 
        to='/signin'
        className={({isActive}) => isActive ? 'active' : ''}
        >Signin</NavLink>
      </li>
    </ul>
  )
}

export default UnAuthedLinks