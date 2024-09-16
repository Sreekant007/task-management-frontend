import { Col, Row } from "react-bootstrap";
import NavBar from "../../_shared/NavBar";
import { AppConstant, dummyTask } from "../../constant/constant";
import { bool, array } from "prop-types";
import "./Task.scss";
import TaskItem from "./TaskItem/TaskItem";
import { connect, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  creatTask,
  getTask,
  setSubmitStatus,
  updateTask,
} from "../../duck/Task/TaskAction";
import { clearLocal, getLocalData } from "../../utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../constant/routes";
import AppLoader from "../../_shared/AppLoader/AppLoader";
import { handleUpdateTask } from "../../duck/Task/Saga";
import LogoutModal from "../../_shared/LogoutModal/LogoutModal";
function Task({ taskList, isLoading, isTaskLoading, isTaskSumited }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const [editTask, setEditTask] = useState(null);
  const user = JSON.parse(getLocalData(AppConstant.LocalUser)) || null;

  useEffect(() => {
    if (user) {
      dispatch(getTask());
    } else {
      navigate(AppRoutes.AUTH.SIGN_IN, { replace: true });
    }
  }, []);

  const handlLogout = () => {
    clearLocal();
    window.location.replace(AppRoutes.AUTH.SIGN_IN);
  };
  const handleShow = (task) => {
    if (task) {
      setEditTask(task);
    } else {
      setEditTask(null);
    }
    console.log("ATS", task);
    setShowModal(!showModal);
  };
  const handleCloseModal = () => {
    dispatch(setSubmitStatus(false));
    setShowModal(!showModal);
  };

  const onSubmitTask = (data) => {
    if (editTask) {
      data.status = editTask.status;
      data.userId = editTask.userId;
      dispatch(updateTask({ data, id: editTask.id }));
      dispatch(getTask());
      handleCloseModal();
    } else {
      data.userId = user.id;
      data.status = "0";
      dispatch(creatTask(data));
      dispatch(getTask());
      handleCloseModal();
    }
  };
  return (
    <div>
      <LogoutModal
        handleCloseLogoutModal={() => {
          setShowLogoutModal(!showLogoutModal);
        }}
        handleLogout={handlLogout}
        showLogoutModal={showLogoutModal}
      />
      <NavBar
        handlLogout={() => setShowLogoutModal(!showLogoutModal)}
        handleShow={handleShow}
        onSubmit={onSubmitTask}
        task={editTask}
        isTaskLoading={isTaskLoading}
        closeModal={handleCloseModal}
        showModal={showModal}
      />
      <h3 className="text-center mt-3">My Task</h3>
      {isLoading && <AppLoader />}
      <div className="mt-3 task-container">
        <div className="w-50 justify-content-center task-list-container">
          <div className="task-list-container">
            {taskList ? (
              // eslint-disable-next-line react/prop-types
              taskList.map((task, key) => (
                <TaskItem
                  key={key}
                  task={task}
                  onTaskEditClick={(task) => {
                    handleShow(task);
                  }}
                />
              ))
            ) : (
              <p className=" mt-3">No Task Available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

Task.propTypes = {
  task: array,
  isLoading: bool,
  isTaskSumited: bool,
  isTaskLoading: bool,
};

export default connect(
  ({
    task: { task, isTaskLoading, isTaskSumited },
    auth: { isAuthLoading },
  }) => {
    return {
      taskList: task,
      isLoading: isAuthLoading,
      isTaskLoading,
      isTaskSumited,
    };
  },
  {}
)(Task);
