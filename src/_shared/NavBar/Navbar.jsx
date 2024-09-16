import "./NavBar.scss";
import { SvgIcons } from "../../constant/SGVIcons";
import { bool, func, object } from "prop-types";
import TaskModal from "../TaskModal/TaskModal";
import TaskEditModal from "../TaskModal/TaskEditModal";
import LogoutModal from "../LogoutModal/LogoutModal";
function Navbar({
  handlLogout,
  handleShow,
  showModal,
  closeModal,
  onSubmit,
  task,
  isTaskLoading,
}) {
  const hamburgerIcon = SvgIcons.HamburgerIcon();

  return (
    <>
      <TaskModal
        OnSubmit={onSubmit}
        handlShowModal={handleShow}
        showTaskModal={showModal}
        editTask={task}
        isTaskLoading={isTaskLoading}
        handleCloseModal={closeModal}
      />

      <nav className="navbar navbar-expand-lg navbar-primary bg-primary p-3">
        <a className="navbar-brand" href="#">
          My Task
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-label="Toggle navigation"
        >
          {hamburgerIcon}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item btn-new-task" onClick={() => handleShow()}>
              Add New Task
            </li>
            <li className="nav-item btn-logout" onClick={() => handlLogout()}>
              Logout
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  handlLogout: func,
  handleShow: func,
  showModal: bool,
  closeModal: func,
  isTaskLoading: bool,
  task: object,
  onSubmit: func,
};

export default Navbar;
