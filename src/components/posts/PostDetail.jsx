import { useParams, Link } from "react-router-dom";
import { usePost } from "../../hooks/usePost";

function PostDetail() {
  const postId = useParams().id;
  const { post, loading, error } = usePost(postId);
  if (loading) return <div className="spinner" />;
  if(error) return <mark>{error.message}</mark>
  return (
    <article className='detail'>
      <nav>
        <h2>
          <a href={post.url} target="_blank">
            {post.title}
          </a>
        </h2>
        <Link to="/">&larr; Back</Link>
      </nav>
      <div>
        <small>By: {post.author}</small>
        <h4>{post.summary}</h4>
        <p>{post.body}</p>
        <small>Submitted: {new Date(post.created_at).toLocaleString()}</small>
      </div>
    </article>
  );
}

export default PostDetail;
