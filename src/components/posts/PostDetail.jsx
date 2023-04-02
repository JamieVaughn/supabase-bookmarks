import { useParams, Link } from "react-router-dom";
import { usePost } from "../hooks/usePost";

function PostDetail() {
  const postId = useParams().id;
  const { post, loading, error } = usePost(postId)

  if (loading) return <div className="spinner" />;
  return (
    <>
    <header className="flex ui top attached header">
      <h2><a className="capitalize" href={post.url} target="_blank">
        {post.title}
      </a></h2>
      <Link to="/">&larr;</Link>
    </header>
    <article className="ui attached segment">
      <h4>{post.summary}</h4>
      <p>{post.body}</p>
    </article>
    <footer className="flex ui bottom attached header ui message blue">
      <div>By: {post.author}</div>
      <div>Submitted: {new Date(post.created_at).toLocaleString()}</div>
    </footer>
    </>
  );
}

export default PostDetail;
