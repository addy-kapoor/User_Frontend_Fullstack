import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

const AddUser = () => {
  const [user, setUsers] = useState({
    name: "",
    username: "",
    email: "",
  });

  const onInputChange = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const onSubmit= async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/")
  }
  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Enter Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Aditi Kapoor"
                name="name"
                value={user.name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Addy"
                name="username"
                value={user.username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="ak@gmail.com"
                name="email"
                value={user.email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-info">
              Submit
            </button>
            <Link to="/" className="btn btn-danger m-2">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
