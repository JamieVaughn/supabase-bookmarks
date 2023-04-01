import { Link } from "react-router-dom";
import UnAuthedLinks from "./UnAuthedLinks";
import AuthedLinks from "./AuthedLinks";
import { useSelector } from "react-redux";
import { selectAuthed } from "../../store/userSlice";
import "./nav.css";

function Navbar() {
  const isAuthed = useSelector(selectAuthed);
  return (
    <nav className="navbar nav-extended is-info">
      <div className="navbar-brand">
        <Link className="brand" to="/">
          📝 Bookmarks
        </Link>
      </div>
      <div className="nav-content">
        {isAuthed ? <AuthedLinks /> : <UnAuthedLinks />}
      </div>
    </nav>
  );
}

export default Navbar;
