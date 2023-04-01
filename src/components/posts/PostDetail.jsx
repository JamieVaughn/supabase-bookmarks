import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../../store/supabaseClient";

function PostDetail() {
  const [post, setPost] = useState(null);
  const postId = useParams().id;

  useEffect(() => {
    async function getPost() {
      let { data: post, error } = await supabase
        .from("posts")
        .select("*")
        .eq("id", postId)
        .single();

      if (error) {
        console.error(error);
      } else {
        setPost(post);
      }
    }
    getPost();
  }, []);

  if (!post) return <div className="spinner" />;

  return (
    <article className="message">
      <header className="message-header">
        <p>
          <a href={post.url} target="_blank">
            {post.title}
          </a>
        </p>
        <Link to="/">&larr;</Link>
      </header>
      <article className="message-body">
        <section className="box">
          <div>By: {post.author}</div>
          <div>Submitted: {new Date(post.created_at).toLocaleString()}</div>
        </section>
        <h2>{post.summary}</h2>
        <p>{post.body}</p>
      </article>
    </article>
  );
}

export default PostDetail;
