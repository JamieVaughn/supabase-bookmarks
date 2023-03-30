import { useState } from 'react'
import { Link } from 'react-router-dom'

function PostSummary (props) {
  const { id, url, category, email, author, summary, title, created_at } = props.post
  const slug = 'react'
  const color = 'blue'
  return (
    <div className='post card'>
      <div className="card-header media">
        <img 
        className='media-left image is-32x32'
        height={32}
        width={32}
        src={`https://cdn.simpleicons.org/${slug}/${color}`} alt="" />
        <p className='title is-4'>
          <a href={url} target='_blank'>{title}</a>
        </p>
        <span className=''>{author}</span>
      </div>
      <div className="card-content">
        <p className="center">{summary}</p>
      </div>
      <div className="card-footer">
        <div className="card-footer-item">
          <p className='subtitle is-6'>{email}</p>
        </div>
        <div className="card-footer-item">
          <time dateTime={created_at}>{created_at}</time>
        </div>
        <div className="card-footer-">
          <Link to={`/post/${id}`}>Details &rarr;</Link>
        </div>
      </div>
    </div>
  )
}

export default PostSummary