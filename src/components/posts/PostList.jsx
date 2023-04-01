import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostSummary from "./PostSummary";
import { supabase } from "../../store/supabaseClient";
import { useSelector } from "react-redux";
import { selectAuthed } from "../../store/userSlice";

function PostList() {
  const isAuthed = useSelector(selectAuthed);

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      let { data, error } = await supabase.from("posts").select("*");
      setPosts(data);
      setLoading(false);
    }
    if (isAuthed) getPosts();
  }, []);

  if (!isAuthed) return <Signin />;
  if (loading) return <div className="spinner" />;
  return (
    <section className="post-list">
      {posts.length ? (
        posts.map((post) => {
          return <PostSummary key={post.id} post={post} />;
        })
      ) : (
        <div>
          <h3 className="center">You don't have any Posts yet!</h3>
          <p className="center">
            Why don't you create one <Link to="/create">here?</Link>
          </p>
        </div>
      )}
    </section>
  );
}

export default PostList;
