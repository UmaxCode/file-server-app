import { useEffect } from "react";

const ActionButton = ({ formActionState, signup }: any) => {
  useEffect(() => {}, []);

  return (
    <button
      className="btn btn-primary d-flex align-items-center"
      disabled={formActionState.notify ? true : false}
    >
      {formActionState.submit ? (
        signup ? (
          <>
            <i className="bi bi-arrow-up-right-circle-fill fs-5 me-2"></i>
            Sign up
          </>
        ) : (
          <>
            <i className="bi bi-arrow-up-right-circle-fill fs-5 me-2"></i>
            Login
          </>
        )
      ) : (
        <div>
          <div className="spinner-border spinner-border-sm me-1" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          {signup ? (
            <span className="">adding...</span>
          ) : (
            <span className="">logging...</span>
          )}
        </div>
      )}
    </button>
  );
};

export default ActionButton;
