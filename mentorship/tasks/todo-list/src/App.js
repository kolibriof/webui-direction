import { useState } from "react";

import Greetings from "./sections/Greetings";
import Calendar from "./sections/Calendar";
import Tasks from "./sections/Tasks";
import Progress from "./sections/Progress";
import { ListContextProvider } from './context/listContext'

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <ListContextProvider>
      <section className={`todo-list ${showModal ? `hidden` : null}`}>
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
    </ListContextProvider>
  );
}

export default App;
