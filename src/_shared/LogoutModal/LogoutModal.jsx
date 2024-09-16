import { Button, Modal } from "react-bootstrap";
import { bool, func } from "prop-types";
function LogoutModal({
  showLogoutModal,
  handleCloseLogoutModal,
  handleLogout,
}) {
  return (
    <div>
      <Modal show={showLogoutModal} onHide={handleCloseLogoutModal}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogoutModal}>
            Close
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
LogoutModal.propTypes = {
  showLogoutModal: bool,
  handleCloseLogoutModal: func,
  handleLogout: func,
};
export default LogoutModal;
