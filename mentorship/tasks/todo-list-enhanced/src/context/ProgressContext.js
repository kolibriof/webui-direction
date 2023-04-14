import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from "react";

export const TaskProgressContext = createContext();

export const useTaskProgressContext = () => useContext(TaskProgressContext);

const getLocalStorage = (key) => {
  let item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  } else {
    return [];
  }
};
const ProgressContext = ({ children }) => {
  const [completedTasks, setCompletedTasks] = useState(
    getLocalStorage("completedTasks")
  );
  const [isClicked, setIsClicked] = useState(false);
  const [list, setList] = useState(getLocalStorage("list"));
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const formattedCompletedDate = new Date().toLocaleDateString("en-US", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const today = new Date().setHours(0, 0, 0, 0);
  const [greetingMessage, setGreetingMessage] = useState("");
  const now = useMemo(() => new Date(), []);
  const hour = useMemo(() => now.getHours(), [now]);
  useEffect(() => {
    if (hour >= 5 && hour < 12) {
      setGreetingMessage("Good morning");
    } else if (hour >= 12 && hour < 18) {
      setGreetingMessage("Good afternoon");
    } else if (hour >= 18 && hour < 22) {
      setGreetingMessage("Good evening");
    } else {
      setGreetingMessage("Good night");
    }
  }, [now, hour]);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [completedTasks]);

  return (
    <TaskProgressContext.Provider
      value={{
        completedTasks,
        setCompletedTasks,
        list,
        setList,
        isClicked,
        setIsClicked,
        selectedDate,
        setSelectedDate,
        formattedCompletedDate,
        showModal,
        setShowModal,
        showConfirmationModal,
        setShowConfirmationModal,
        today,
        greetingMessage,
      }}
    >
      {children}
    </TaskProgressContext.Provider>
  );
};

export default ProgressContext;
