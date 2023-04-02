import Layout from "./appshell/Layout";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import Account from "./auth/Account";
import PostList from "./posts/PostList";
import CreatePost from "./posts/CreatePost";
import PostDetail from "./posts/PostDetail";

// This file consolidates many imports
// into one place where they are all exported
// This technique is called barreling

export {
  Layout,
  Signin,
  Signup,
  Account,
  PostList,
  CreatePost,
  PostDetail
}