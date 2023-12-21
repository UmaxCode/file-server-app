import "react-multi-carousel/lib/styles.css";
import avatar from "../assets/images/avatar.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import LeftSlider from "../components/Sliders/LeftSlider";
import RightSlider from "../components/Sliders/RightSlider";
import FileCard from "../components/cards/FileCard";

import "./HompageTemplate.css";

const HompageTemplate = () => {
  const [projects, setProjects] = useState([]);
  const [files, setFiles] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/projects").then((res) => {
      setProjects(res.data);
    });

    axios.get("http://localhost:3001/files").then((res) => {
      setFiles(res.data);
    });
  }, []);
  return (
    <div className="bg-light">
      <header className="bg-white fixed-top border-bottom border-gray">
        <nav className="navbar ">
          <div className="container-fluid">
            <a className="navbar-brand text-primary" href="#">
              Umaxcode <i className="bi bi-braces-asterisk text-primary"></i>
            </a>

            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Umaxcode{" "}
                  <i className="bi bi-braces-asterisk text-primary"></i>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <h2 className="fs-4">User Profile</h2>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main
        className="px-3 pb-4"
        style={{ marginTop: "40px", paddingTop: "2.5em" }}
      >
        <div className="row home-main">
          <div className="home-aside ">
            <LeftSlider />
          </div>
          <div className="home-section">
            <section className="  rounded">
              <div
                className="bg-primary text-white rounded p-2 mb-4 
              "
              >
                <h2 className="fs-4 my-2">
                  Are you looking for materials to boost your tech career ?
                </h2>
                <p className="mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  quam soluta rerum ducimus aliquam tenetur illo harum quasi
                  nihil, esse, accusantium provident. Reiciendis adipisci
                  aliquam quasi voluptatem molestiae voluptates debitis. Lorem
                  ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Consequuntur, pariatur. Lorem ipsum dolor
                  sit.
                </p>
                <div className="mt-3 mb-1">
                  <div className="d-flex gap-2">
                    <div className="flex-grow-1  px-0 ">
                      <form action="">
                        <div className=" position-relative ">
                          <i
                            className="bi bi-search position-absolute text-white top-50 translate-middle"
                            style={{ left: "1em" }}
                          ></i>
                          <input
                            type="search"
                            name=""
                            id=""
                            placeholder="Search for your materials..."
                            className="form-control rounded-0 rounded-start bg-secondary text-white border-0"
                            style={{ paddingLeft: "2em" }}
                          />
                        </div>
                      </form>
                    </div>
                    <div className=" d-grid">
                      <button className="btn bg-white text-primary rounded-0 rounded-end border-0">
                        Search Files
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-2 ps-1"> pagination goes here</div>
              <div className="d-flex flex-column gap-3">
                {files.map((file, index) => {
                  return <FileCard file={file} avatar={avatar} key={index} />;
                })}
              </div>
            </section>
          </div>
          <div className="home-article">
            <RightSlider projects={projects} avatar={avatar} />
          </div>
        </div>
      </main>
      <footer className="bg-dark p-5 text-white ">Footer</footer>
    </div>
  );
};

export default HompageTemplate;
