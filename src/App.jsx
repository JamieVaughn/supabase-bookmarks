import { Route, Navigate } from "react-router-dom";
import {
  Layout,
  Signin,
  Signup,
  PostDetail,
  PostList,
  Account,
  CreatePost
} from './components'
import { useSession } from "./hooks/useSession";
import "./global.css";

function App() {
  const session = useSession()

  if(!session) {
    return (
      <Layout>
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Signin />} />
      </Layout>
    )
  }
  return (
    <Layout>
      <Route exact path="/" element={<PostList />} />
      <Route path="/account" element={<Account />} />
      <Route path="/create" element={<CreatePost session={session} />} />
      <Route path="/post/:id" element={<PostDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Layout>
  );
}

export default App;
