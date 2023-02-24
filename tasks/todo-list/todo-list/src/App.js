import Greetings from "./sections/Greetings";
import Calendar from "./sections/Calendar";
import Tasks from "./sections/Tasks";
import Progress from "./sections/Progress";
import ModalWindow from "./components/ModalWindow";
import "./index.css";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section className={`todo-list ${showModal && `hidden`}`}>
        <div className="main-page">
          <div className="greetings-calendar-container">
            <Greetings />
            <Calendar />
          </div>
        </div>
        <div className="progress-container">
          <Progress />
        </div>
        <Tasks showModal={showModal} setShowModal={setShowModal} />
      </section>
    </>
  );
}

export default App;
