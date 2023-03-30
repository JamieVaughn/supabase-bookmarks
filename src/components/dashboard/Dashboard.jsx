import PostList from '../posts/PostList'
import Signin from '../auth/Signin'

function Dashboard (props) {
  if(!props.isAuthed) return <Signin />
  return (
    <section className='hero container'>
      <PostList />
    </section>
  )
}

export default Dashboard