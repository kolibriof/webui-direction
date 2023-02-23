import Greetings from "./sections/Greetings";
import Calendar from "./sections/Calendar";
import Tasks from "./sections/Tasks";
import "./index.css";

function App() {
  return (
    <section className="todo-list">
      <div className="main-page">
        <div className="greetings-calendar-container">
          <Greetings />
          <Calendar />
        </div>
        <Tasks />
      </div>
    </section>
  );
}

export default App;
