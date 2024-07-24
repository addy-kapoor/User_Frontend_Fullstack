import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
    const { id } = useParams();
  const [user, setUser] = useState({
    id: "",
    name: "",
    username: "",
    email: ""
  });


  useEffect(() => {
    // Fetch user details from API or database
    fetchUserDetails();
  }, []);

    const fetchUserDetails = async () => {
      // Replace with your actual API endpoint or database query
      const response = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(response.data);
    };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Details</h2>
      <div className="card">
        <div className="card-body">
          <p className="card-text">Details of user id: {user.id || "N/A"}</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Name:</strong> {user.name || "N/A"}
            </li>
            <li className="list-group-item">
              <strong>UserName:</strong> {user.username || "N/A"}
            </li>
            <li className="list-group-item">
              <strong>Email:</strong> {user.email || "N/A"}
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-primary"
          onClick={() => (window.location.href = "/")}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ViewUser;
