import "./index.css";
import MainPage from "./sections/MainPage";
import { useTaskProgressContext } from "./components/ProgressContext";
function App() {
  const { showModal, showConfirmationModal } = useTaskProgressContext();
  return (
    <section
      className={`todo-list ${
        showModal || showConfirmationModal ? `hidden` : null
      }`}
    >
      <MainPage />
    </section>
  );
}

export default App;
