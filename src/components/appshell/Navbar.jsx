import { Link } from "react-router-dom";
import UnAuthedLinks from "./UnAuthedLinks";
import AuthedLinks from "./AuthedLinks";
import { useSelector } from "react-redux";
import { selectAuthed } from "../../store/userSlice";

function Navbar() {
  const isAuthed = useSelector(selectAuthed);
  return (
    <nav>
      <Link to="/">
        <h1>📝 Bookmarks</h1>
      </Link>
      <div>
        {isAuthed ? <AuthedLinks /> : <UnAuthedLinks />}
      </div>
    </nav>
  );
}

export default Navbar;
