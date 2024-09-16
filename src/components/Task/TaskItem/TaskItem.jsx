import { object, func } from "prop-types";
import { SvgIcons } from "../../../constant/SGVIcons";
function TaskItem({ task, onTaskEditClick, onTaskStausClick }) {
  const EditIcon = SvgIcons.EditIcon();
  return (
    <div className="task-list-item">
      <div className="d-flex justify-content-between">
        <p className="h4">{task.title} </p>

        <p className="edit-btn" onClick={() => onTaskEditClick(task)}>
          {EditIcon}&nbsp; Edit Task
        </p>
      </div>
      <p className="">Due On - {task.dueDate}</p>
      <p
        onClick={() => onTaskStausClick(task)}
        className={`${
          task.status == 0
            ? "status-progress-text"
            : task.status == 1
            ? "status-completed-text"
            : ""
        }`}
      >
        {task.status == 0 ? "Progress" : task.status == 1 ? "Completed" : ""}
      </p>
      <p>{task.description}</p>
      <div></div>
    </div>
  );
}

TaskItem.propTypes = {
  task: object,
  onTaskEditClick: func,
  onTaskStausClick: func,
};

export default TaskItem;
