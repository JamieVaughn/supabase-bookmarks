import { Link } from 'react-router-dom'

function PostSummary (props) {
  const { id, url, category, email, author, summary, title, created_at } = props.post
  const time = new Date(created_at).toLocaleDateString()
  return (
    <aside>
      <header>
        <img 
        height={48}
        width={48}
        src={`https://cdn.simpleicons.org/${category}`} alt="Tech Logo" />
        <h3><a href={url} target='_blank'>{title}</a></h3>
        <sup>
          <time dateTime={created_at}>{time}</time>
        </sup>
      </header>
      <p>{summary}</p>
      <small>{email}</small>
      <footer>
        <p>{author}</p>
        <Link to={`/post/${id}`}>Details &rarr;</Link>
      </footer>
    </aside>
  )
}

export default PostSummary