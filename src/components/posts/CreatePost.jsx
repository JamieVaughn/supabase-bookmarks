import { useState, useEffect } from "react";
import { supabase } from "../../store/supabaseClient";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";
import InputField from "./InputField";

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
  const [userData, setUserData] = useState(null);
  const [valid, setValid] = useState(true);
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
    const getUser = async () => {
      let { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();
      setUserData(data);
    };
    getUser();
  }, []);

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

  const validate = (e) => setValid(e.target.value.length > 40 ? false : true);

  return (
    <form onSubmit={handleSubmit}>
      <section className="box">
        <div>
          <strong>By:</strong> {post.author}
        </div>
        <span>
          <strong>Username:</strong> {post.username}
        </span>
      </section>
      <h2>Create A New Post:</h2>
      <div className="field columns is-vcentered">
        <div className="control column is-two-thirds">
          <InputField
            id={"title"}
            value={post.title}
            handleChange={handleChange}
          />
        </div>
        <div className="control column is-one-third">
          <label className="label" htmlFor="category">
            Category
          </label>
          <div className="select">
            <select id="category" required onChange={handleChange}>
              {categories.map((category) => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
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
        help={
          <span hidden={valid}>Summaries must be 40 characters or less.</span>
        }
      />
      <div className="field">
        <label className="label" htmlFor="body">
          Body
        </label>
        <div className="control">
          <textarea
            required
            id="body"
            className="input"
            type="text"
            rows="4"
            placeholder="Provide the body text"
            value={post.body}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field">
        <button className="button is-dark is-fullwidth mt-2">Submit</button>
      </div>
    </form>
  );
}

export default CreatePost;
