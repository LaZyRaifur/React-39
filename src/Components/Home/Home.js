import Friends from "../Friends/Friends";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h1>{friends.length}</h1>

      {friends.map((friend) => (
        <Friends friend={friend}></Friends>
      ))}
    </div>
  );
};

export default Home;
