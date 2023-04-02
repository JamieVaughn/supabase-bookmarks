import { useState, useEffect } from "react";
import { supabase } from "../../store/supabaseClient";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import InputField from "./InputField";
import { useUser } from "../../hooks/useUser";

export const categories = [
  "html5",
  "css3",
  "csswizardry",
  "git",
  "webcomponentsdotorg",
  "materialdesign",
  "bootstrap",
  "bulma",
  "github",
  "amazonaws",
  "json",
  "redux",
  "javascript",
  "svg",
  "visualstudiocode",
  "freecodecamp",
  "codesandbox",
  "codepen",
  "firebase",
  "npm",
  "nodedotjs",
  "react",
  "reactrouter",
  "angular",
  "vuedotjs",
];

function CreatePost(props) {
  const { user } = useSelector(selectUser);
  const [valid, setValid] = useState(true);
  const userData = useUser();
  const [post, setPost] = useState({
    title: "",
    url: "",
    summary: "",
    body: "",
    category: "",
    author: user?.full_name || user?.email.slice(user.email.indexOf("@")),
    username: user?.username || "",
    email: user?.email || props.session.user.email,
  });

  useEffect(() => {
    setPost({
      ...post,
      author: userData?.full_name,
      username: userData?.username,
    });
  }, [userData]);

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("posts", post);
    if (!post.email && !post.author) {
      return;
    }
    await supabase.from("posts").insert([post]);
    setPost({
      title: "",
      url: "",
      summary: "",
      body: "",
      category: "",
      author: "",
    });
  };

  const maxLength = 50;
  const validate = (e) => setValid(e.target.value.length < maxLength);

  return (
    <form onSubmit={handleSubmit}>
      <nav>
        <h2>Create A New Post:</h2>
        <section>
          <aside>
            <small>By: {post.author}</small>
            <br />
            <small>Username: {post.username}</small>
          </aside>
        </section>
      </nav>

      <InputField id={"title"} value={post.title} handleChange={handleChange} />
      <label htmlFor="category">Category</label>
      <select id="category" required onChange={handleChange}>
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <InputField
        id={"url"}
        title={"Web Address"}
        value={post.url}
        handleChange={handleChange}
        help={
          <span>
            Include <i>'https://'</i>
          </span>
        }
      />
      <InputField
        id={"summary"}
        value={post.summary}
        handleChange={(e) => (handleChange(e), validate(e))}
        maxLength={maxLength}
        help={
          !valid && (
            <span>Summaries must be {maxLength} characters or less.</span>
          )
        }
      />
      <label htmlFor="body">Body</label>
      <textarea
        required
        id="body"
        type="text"
        rows="4"
        placeholder="Provide the body text"
        value={post.body}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}

export default CreatePost;
