const RightSlider = ({ projects, avatar }: any) => {
  return (
    <article className="rounded position-sticky" style={{ top: "80px" }}>
      <div className="text-center bg-white p-3 mb-3">
        <img
          src={avatar}
          alt="user profile pic"
          width={50}
          className="rounded-circle mb-1"
        />
        <h3 className="fs-5 ">Mr. Max</h3>
        <p className="text-muted">
          <span>Web Developer</span> - <span>0 yrs Experience</span>
        </p>
        <button className="btn btn-primary">
          <i className="bi bi-person-fill-gear"></i> Edit profile
        </button>
      </div>

      <div className="p-3 bg-white rounded mb-3">
        <h3 className="fs-5">Project worked on.</h3>
        <div className="">
          <div className="">
            {projects ? (
              projects.map((component: any, index: any) => {
                return (
                  <div className=" d-flex gap-2 mb-2" key={index}>
                    <div className=" d-flex justify-content-center align-items-center">
                      <div className="bg-primary px-1 rounded">
                        <i className="bi bi-code-slash fs-4 text-white"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <div className="text-muted">{component.description}</div>
                      <a className="text-primary" href={component.link}>
                        {component.link}
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No project to show</div>
            )}
          </div>
        </div>
      </div>
      <div className="p-3 bg-white rounded">
        <h3 className="fs-5 mb-3">Skills & Experience.</h3>
        <div className="d-flex flex-wrap gap-2">
          <span className="bg-secondary px-1 rounded text-white">HTML</span>
          <span className="bg-secondary px-1 rounded text-white">CSS</span>
          <span className="bg-secondary px-1 rounded text-white">SCSS</span>
          <span className="bg-secondary px-1 rounded text-white">Python</span>
          <span className="bg-secondary px-1 rounded text-white">
            Django templating
          </span>
          <span className="bg-secondary px-1 rounded text-white">
            Django Rest Framework
          </span>
          <span className="bg-secondary px-1 rounded text-white">
            JavaScript
          </span>
          <span className="bg-secondary px-1 rounded text-white">
            TypeScript
          </span>
          <span className="bg-secondary px-1 rounded text-white">React</span>
          <span className="bg-secondary px-1 rounded text-white">React</span>
          <span className="bg-secondary px-1 rounded text-white">React</span>
          <span className="bg-secondary px-1 rounded text-white">React</span>
          <span className="bg-secondary px-1 rounded text-white">React</span>
          <span className="bg-secondary px-1 rounded text-white">React</span>
        </div>
      </div>
    </article>
  );
};

export default RightSlider;
