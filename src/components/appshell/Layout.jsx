import { BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./Navbar";

function Layout (props) {

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          {props.children}
        </Routes>
      </main>
      <footer>
        © 2023
      </footer>
    </BrowserRouter>
  )
}

export default Layout