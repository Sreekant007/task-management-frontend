import { createPortal } from "react-dom";
import { arrayOf, func, shape, string } from "prop-types";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import "./SnackBarContainer.scss";
import { deleteSnackbar } from "../../duck/Auth/AuthActions";
import Snackbar from "./SnackBar/SnackBar";

const TIMEOUT = 1000;

const SnackbarsContainer = ({ snackbars, deleteSnackbar }) => (
  <CSSTransition
    in={!!snackbars?.length}
    timeout={TIMEOUT}
    classNames="snackbars-transition"
    unmountOnExit
    appear
  >
    <div className="snackbars-container">
      {!!snackbars?.length &&
        snackbars.map((snackbar) => {
          const { id, text, type } = snackbar;

          return (
            <Snackbar
              text={text}
              type={type}
              id={id}
              key={id}
              onClick={deleteSnackbar}
            />
          );
        })}
    </div>
  </CSSTransition>
);

const SnackbarPortal = ({ snackbars, deleteSnackbar }) =>
  createPortal(
    <SnackbarsContainer
      snackbars={snackbars}
      deleteSnackbar={deleteSnackbar}
    />,
    document.body
  );

SnackbarsContainer.propTypes = {
  snackbars: arrayOf(
    shape({
      text: string,
      type: string,
      id: string,
    })
  ),
  deleteSnackbar: func.isRequired,
};

const mapStateToProps = ({ auth: { snackbars } }) => ({ snackbars });

export default connect(mapStateToProps, {
  deleteSnackbar,
})(SnackbarPortal);
