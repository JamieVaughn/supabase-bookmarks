import { NavLink } from 'react-router-dom'

function UnAuthedLinks (props) {

  return (
    <ul className='tabs'>
      <li className='tab'>
        <NavLink 
        to='/signup'
        className={({isActive}) => isActive ? 'active' : ''}
        >Signup</NavLink>
      </li>
      <li className='tab'>
        <NavLink 
        to='/signin'
        className={({isActive}) => isActive ? 'active' : ''}
        >Signin</NavLink>
      </li>
    </ul>
  )
}

export default UnAuthedLinks