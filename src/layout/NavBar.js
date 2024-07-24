import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          Full Stack Application
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
        <Link className="btn btn-outline-light" to="/addUser">Add User</Link>
      </nav>
    </div>
  );
}
