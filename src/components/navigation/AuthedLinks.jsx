import { NavLink } from "react-router-dom";
import { supabase } from "../../store/supabaseClient";
import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";

function AuthedLinks(props) {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await supabase.auth.signOut();
    dispatch(logout());
  };

  return (
    <ul className="tabs">
      <li className="tab">
        <NavLink
          to="/create"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Create Post
        </NavLink>
      </li>
      <li className="tab">
        <NavLink
          to="/account"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          👤
        </NavLink>
      </li>
      <li className="tab">
        <NavLink
          to="/"
          onClick={handleLogout}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Logout
        </NavLink>
      </li>
    </ul>
  );
}

export default AuthedLinks;
