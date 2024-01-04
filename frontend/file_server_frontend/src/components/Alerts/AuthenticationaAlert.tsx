const AuthenticationaAlert = ({ formActionState, setFormActionState }: any) => {
  return (
    <div
      className={`toast position-fixed z-1 ${
        formActionState.notify ? "show" : ""
      }`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{ top: "2rem", right: "2rem" }}
    >
      <div className="toast-header">
        <i className="bi bi-arrow-up-right-circle-fill fs-5 me-2"></i>
        <strong className="me-auto">Sign up notification</strong>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => {
            setFormActionState({
              ...formActionState,
              notify: false,
            });
          }}
        ></button>
      </div>
      <div className="toast-body">Account created successfully ✔</div>
    </div>
  );
};

export default AuthenticationaAlert;
