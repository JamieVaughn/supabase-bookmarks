import { useState } from 'react'
import { supabase } from '../auth/supabaseClient'
import { useSelector } from 'react-redux';
import { saveUser } from '../auth/userSlice';

export const categories = [ "html5", "css3", "csswizardry", "git", "webcomponentsdotorg", "materialdesign", "bootstrap", "bulma", "github", "amazonaws", "json", "redux", "javascript", "svg", "visualstudiocode", "freecodecamp", "codesandbox", "codepen", "firebase", "npm", "nodedotjs", "react", "reactrouter", "angular", "vuedotjs",];

function CreatePost (props) {
  const { user } = useSelector(saveUser)
  const [valid, setValid] = useState(true)
  const [post, setPost] = useState({
    title: '',
    url: '',
    summary: '',
    body: '',
    category: '',
    author: user?.full_name || user?.username || user?.email.slice(user.email.indexOf('@')) || props.session.user.username,
    email: user?.email || props.session.user.email
  })
  const handleChange = e => {
    setPost({
      ...post,
      [e.target.id]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('posts', post)
    if(!post.email && !post.author) {
      return
    }
    await supabase.from('posts').insert([post])
    setPost({
      title: '',
      url: '',
      summary: '',
      body: '',
      category: '',
      author: ''
    })
  }

  const validate = e => setValid(e.target.value.length > 40 ? false : true)

  return (
    <form onSubmit={handleSubmit}>
      <h5>Create A New Post:</h5>
      <div className="field columns is-vcentered">
        <div className="control column is-two-thirds">
        <label className="label" htmlFor='title'>Title</label>
          <div className="control">
            <input 
            required
            id='title' 
            className="input" 
            type="text" 
            placeholder="Provide a title"
            value={post.title}
            onChange={handleChange}
            />
          </div>
        </div>
        <div className="control column is-one-third">
        <label className="label" htmlFor='category'>Category</label>
        <div className="select">
          <select id="category" required onChange={handleChange}>
            {categories.map(category => {
              return <option key={category} value={category}>{category}</option>
            })}
          </select>
        </div>
      </div>
      </div>
      <div className="field">
        <label className="label" htmlFor='url'>Web Address</label>
        <div className="control">
          <input 
          required
          id='url' 
          className="input" 
          type="text" 
          pattern='^https://.+[.].+'
          placeholder="Provide your url"
          value={post.url}
          onChange={handleChange}
           />
           <p className='help is-info'>Include <i>'https://'</i></p>
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor='summary'>Summary</label>
        <div className="control">
          <input 
          required
          id='summary' 
          className="input" 
          type="text" 
          placeholder="Provide your summary"
          value={post.summary}
          onChange={e => (handleChange(e), validate(e))}
          maxLength={41}
           />
           <p className='help is-danger' hidden={valid}>Summaries must be 40 characters or less.</p>
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor='body'>Body</label>
        <div className="control">
          <textarea 
          required
          id='body' 
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
        <button className='button is-dark is-fullwidth mt-2'>Submit</button>
      </div>
    </form>
  )
}

export default CreatePost