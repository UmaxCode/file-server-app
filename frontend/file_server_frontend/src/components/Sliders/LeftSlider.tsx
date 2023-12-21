const LeftSlider = () => {
  return (
    <aside
      className="bg-white px-2 py-2 rounded position-sticky"
      style={{ top: "80px" }}
    >
      <h1 className="fs-3 text-muted">Sorting criteria</h1>
      <ul className="list-unstyled">
        <li className="ps-2 mb-4">
          <form action="">
            <label htmlFor="user" className="form-label">
              Uploaded by user
            </label>
            <select className="form-select" aria-label="Default select example">
              <option>Maxwell Odoom</option>
              <option value="1">Chirstopher Kwesi</option>
              <option value="2">John Mai</option>
              <option value="3">Kelvin Boa</option>
            </select>
          </form>
        </li>
        <li className="ps-2 mb-4">
          <h2 className="fs-5">Which field?</h2>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="field"
              id="ui/ux"
            />
            <label className="form-check-label" htmlFor="ui/ux">
              UI/UX
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="field"
              id="QA"
            />
            <label className="form-check-label" htmlFor="QA">
              Quality Assurance
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="field"
              id="FD"
            />
            <label className="form-check-label" htmlFor="FD">
              Frontend Development
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="field"
              id="BD"
            />
            <label className="form-check-label" htmlFor="BD">
              Backend Development
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="field"
              id="FSD"
            />
            <label className="form-check-label" htmlFor="FSD">
              Full-Stack Development
            </label>
          </div>
        </li>
        <li className="ps-2 mb-3">
          <h2 className="fs-5">Which reactions?</h2>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="reaction1"
              id="liked"
            />
            <label className="form-check-label" htmlFor="liked">
              Like
              <i className="bi bi-hand-thumbs-up-fill text-primary ms-1"></i>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="reaction2"
              id="dislike"
            />
            <label className="form-check-label" htmlFor="dislike">
              Dislike
              <i className="bi bi-hand-thumbs-down-fill text-primary ms-1"></i>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="reaction3"
              id="love"
            />
            <label className="form-check-label" htmlFor="love">
              Love
              <i className="bi bi-heart-fill text-primary ms-1"></i>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="reaction4"
              id="star"
            />
            <label className="form-check-label" htmlFor="star">
              star <i className="bi bi-star-fill text-primary ms-1"></i>
            </label>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default LeftSlider;
