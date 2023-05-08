import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";
import { toast } from "react-toastify";

const SingleItem = ({ item }) => {
  const queryClient = useQueryClient();
  const { mutate: deleteTask } = useMutation({
    mutationFn: (id) => customFetch.delete(`/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      toast.success(`Task ${item.title} was deleted!`);
    },
  });
  const { mutate: editTask } = useMutation({
    mutationFn: (id) => customFetch.patch(`/${id}`, { isDone: !item.isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      toast.success(
        `Task ${item.title} was marked ${
          item.isDone ? "uncompleted" : "completed"
        }!`
      );
    },
  });
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask(item.id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
