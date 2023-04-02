import { Link } from "react-router-dom";
import PostSummary from "./PostSummary";
import { usePosts } from "../../hooks/usePosts";

function PostList() {
  const { posts, loading, error } = usePosts();
  if (loading) return <div className="spinner" />;
  if (!posts.length) {
    return (
      <section>
        <aside>
          <h3>There are no posts yet!</h3>
          <p>
            Why don't you create one <Link to="/create">here?</Link>
          </p>
        </aside>
      </section>
    );
  }
  return (
    <section>
      {posts.map((post) => (
        <PostSummary key={post.id} post={post} />
      ))}
    </section>
  );
}

export default PostList;
