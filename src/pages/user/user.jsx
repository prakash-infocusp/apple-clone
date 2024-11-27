import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

const User = () => {
  let { username } = useParams();
  let navigate = useNavigate();
  const [name, setName] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubUser = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}`,
        );
        if (!response.ok) {
          throw new Error(`User not found: ${response.status}`);
        }
        const data = await response.json();
        setName(data.name || "No name available");
      } catch (err) {
        setError(err.message);
      }
    };

    fetchGitHubUser();
  }, [username]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>User Page</h1>
      {name ? <p>Name: {name}</p> : <p>Loading...</p>}
      <button onClick={() => navigate("/")}>Go to Home</button>{" "}
    </div>
  );
};

export default User;
