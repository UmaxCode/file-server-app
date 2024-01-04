const FileCard = ({ file, avatar }) => {
  return (
    <div className="bg-white text-primary p-2  rounded">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span>
          <img
            src={avatar}
            alt=""
            width={40}
            height={40}
            className="rounded-circle"
          />
          <span className="ms-1">{file.username}</span>
        </span>
        <div className="d-flex flex-wrap gap-2">
          <span
            className={`border px-1 rounded ${
              file.category === "ui/ux"
                ? "bg-primary text-white"
                : "border-primary"
            }`}
          >
            UI/UX
          </span>
          <span
            className={`border px-1 rounded ${
              file.category === "frontend"
                ? "bg-primary text-white"
                : "border-primary"
            }`}
            title="Frontend Development"
          >
            FD
          </span>
          <span
            className={`border px-1 rounded ${
              file.category === "QA"
                ? "bg-primary text-white"
                : "border-primary"
            }`}
            title="Quality Assurance"
          >
            QA
          </span>
          <span
            className={`border px-1 rounded ${
              file.category === "backend"
                ? "bg-primary text-white"
                : "border-primary"
            }`}
            title="Backend Development"
          >
            BD
          </span>
          <span
            className={`border px-1 rounded ${
              file.category === "fullstack"
                ? "bg-primary text-white"
                : "border-primary"
            }`}
            title="Full-Stack Development"
          >
            FSD
          </span>
        </div>
      </div>
      <div className="">
        <h1 className="fs-5">{file.title}</h1>
        <div className="">{file.description}</div>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <span className="d-flex gap-2">
          <i className="bi bi-hand-thumbs-up"></i>
          <i className="bi bi-hand-thumbs-down"></i>
          <i className="bi bi-heart"></i>
          <i className="bi bi-star"></i>
        </span>
        <span className="text-muted">12:00AM</span>
      </div>
    </div>
  );
};

export default FileCard;
