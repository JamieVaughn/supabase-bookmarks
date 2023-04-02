import { Link } from "react-router-dom";
import PostSummary from "./PostSummary";
import { useSelector } from "react-redux";
import { selectAuthed } from "../../store/userSlice";
import Signin from "../auth/Signin";
import { usePosts } from "../hooks/usePosts";

function PostList() {
  const isAuthed = useSelector(selectAuthed);
  const { posts, loading, error } = usePosts(isAuthed)
  console.log('check', isAuthed)
  if (!isAuthed) return <Signin />;
  if (loading) return <div className="spinner" />;
  return (
    <section className="post-list">
      {posts.length && !loading ? (
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
