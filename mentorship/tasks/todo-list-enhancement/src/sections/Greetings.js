import { useTaskProgressContext } from "../context/ProgressContext";
import "../styles/greetings.css";

const Greetings = () => {
  const { greetingMessage } = useTaskProgressContext();
  return (
    <div className="welcome-message-container">
      <div>
        <h1>{greetingMessage}</h1>
      </div>
      <div>
        <h2>Welcome here...</h2>
      </div>
    </div>
  );
};

export default Greetings;
