import { Link } from "react-router-dom";
import UnAuthedLinks from "./UnAuthedLinks";
import AuthedLinks from "./AuthedLinks";
import { useSelector } from "react-redux";
import { selectAuthed } from "../../store/userSlice";

function Navbar() {
  const isAuthed = useSelector(selectAuthed);
  return (
    <nav className="flex navbar is-info">
      <Link to="/">
        <h1 className="ui header white text-lg">
          📝 Bookmarks
        </h1>
      </Link>
      <div className="ml-auto">
        {isAuthed ? <AuthedLinks /> : <UnAuthedLinks />}
      </div>
    </nav>
  );
}

export default Navbar;
