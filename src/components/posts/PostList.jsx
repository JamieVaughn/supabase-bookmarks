import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PostSummary from './PostSummary'
import { supabase } from '../auth/supabaseClient'
import './posts.css'

function PostList () {
  const [loading, setLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function getPosts() {
      let { data, error } = await supabase.from('posts').select('*')
      setPosts(data)
      setLoading(false)
    }
    getPosts()
  }, [])

  if(loading) return <div className="spinner" />
  return (
    <div className='post-list'>
      {
        posts.length ? posts.map(post => {
          return <PostSummary key={post.id} post={post} />
        }) :
        <div>
          <h3 className='center'>You don't have any Posts yet!</h3>
          <p className='center'>
            Why don't you create one <Link to='/create'>here?</Link>
          </p>
        </div>
      }
    </div>
  )
}

export default PostList