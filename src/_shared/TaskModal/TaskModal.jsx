import { bool, func, object } from "prop-types";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import AppLoader from "../AppLoader/AppLoader";
import { useEffect } from "react";
function TaskModal({
  showTaskModal,
  handlShowModal,
  handleCloseModal,
  OnSubmit,
  editTask,
  isTaskLoading,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  if (editTask) {
    setValue("title", editTask.title);
    setValue("dueDate", editTask.dueDate);
    setValue("description", editTask.description);
  } else {
    setValue("title", "");
    setValue("dueDate", "");
    setValue("description", "");
  }

  return (
    <Modal show={showTaskModal} onHide={handlShowModal}>
      <Modal.Header closeButton>
        <Modal.Title>{editTask ? "Edit" : "Add"} New Task </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              name="title"
              {...register("title", {
                required: true,
              })}
            />
            {errors.title && errors.title.type === "required" && (
              <small className="error-text">Title is required</small>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              name="dueDate"
              {...register("dueDate", {
                required: true,
              })}
            />
            {errors.dueDate && errors.dueDate.type === "required" && (
              <small className="error-text">Due Date is required</small>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              {...register("description", {
                required: true,
              })}
            />
            {errors.description && errors.description.type === "required" && (
              <small className="error-text">Description is required</small>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button
          variant="primary"
          disabled={isTaskLoading}
          onClick={handleSubmit(OnSubmit)}
        >
          {isTaskLoading ? (
            <AppLoader />
          ) : editTask ? (
            "Update Task"
          ) : (
            "Create Task"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
TaskModal.propTypes = {
  showTaskModal: bool,
  handlShowModal: func,
  handleCloseModal: func,
  OnSubmit: func,
  editTask: object,
  isTaskLoading: bool,
};
export default TaskModal;
