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
