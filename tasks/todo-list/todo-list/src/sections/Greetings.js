import React, { useEffect, useState } from "react";
import "../styles/greetings.css";

const Greetings = () => {
  const [greetingMessage, setGreetingMessage] = useState("");

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
      setGreetingMessage("Good morning");
    } else if (hour >= 12 && hour < 18) {
      setGreetingMessage("Good afternoon");
    } else if (hour >= 18 && hour < 22) {
      setGreetingMessage("Good evening");
    } else {
      setGreetingMessage("Good night");
    }
  }, []);

  return (
    <div className="welcome-message-container">
      <div>
        {" "}
        <h1>{greetingMessage}</h1>
      </div>
      <div>
        <h2>Welcome here...</h2>
      </div>
    </div>
  );
};

export default Greetings;
