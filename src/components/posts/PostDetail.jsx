import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../auth/supabaseClient'

function PostDetail () {
  const [post, setPost] = useState(null)
  const postId = useParams().id

  useEffect(() => {
    async function getPost() {
      let { data: post, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', postId)
        .single()

        console.log(post, error)
      if(error) {
        console.error(error)
      } else {
        setPost(post)
      }
    }
    getPost()
  }, [])

  if(!post) return <div className="spinner" />

  return (
    <article className="message">
      <div className="message-header">
        <p><a href={post.url} target="_blank">{post.title}</a></p>
        <Link to='/' class='icon'>&larr;</Link>
      </div>
      <div className="message-body">
        <div className="box">
          <span>By: {post.author}</span>
          <span>Submitted: {new Date(post.created_at).toLocaleString()}</span>
        </div>
        <h2>{post.summary}</h2>
        <p>{post.body}</p>
      </div>
    </article>
  )
}

export default PostDetail