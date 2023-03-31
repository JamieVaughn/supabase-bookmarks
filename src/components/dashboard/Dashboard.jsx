import PostList from '../posts/PostList'
import Signin from '../auth/Signin'
import { useSelector } from 'react-redux'
import { selectAuthed } from '../auth/userSlice'

function Dashboard () {
  const isAuthed = useSelector(selectAuthed)
  
  if(isAuthed) return <Signin />
  return (
    <section className='hero container'>
      <PostList />
    </section>
  )
}

export default Dashboard