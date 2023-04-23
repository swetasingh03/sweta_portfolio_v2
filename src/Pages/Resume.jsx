import React from 'react'
import resume from '../Assets/Files/Sweta webdev.pdf';

function Resume() {
  return (
    <div className="container px-5 my-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bolder mb-0"><span className="text-gradient d-inline">Resume</span></h1>
      </div>
      <div className="row gx-5 justify-content-center">
        <div className="col-lg-11 col-xl-9 col-xxl-8">
          <section>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h2 className="text-primary fw-bolder mb-0">Experience</h2>
              <a className="btn btn-primary px-4 py-3" href={resume} download>
                <div className="d-inline-block bi bi-download me-2"></div>
                Download Resume
              </a>
            </div>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-primary fw-bolder mb-2">2023 - Present</div>
                      <div className="small fw-bolder">Full stack Developer</div>
                      {/* <div className="small text-muted">virtuzo infosystems</div>
                      <div className="small text-muted">Noida,India</div> */}
                    </div>
                  </div>
                  <div className="col-lg-8"><div>I have 1 years of experience as a Software Developer Currently, I am working as a software developer in virtuzo infosystems pvt ltd for the last 1 year. My primary responsibility is to develop and enhance applications using JavaScript,Node Js and ReactJS.</div></div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-secondary fw-bolder mb-4">Education</h2>
            {/* <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">2015 - 2017</div>
                      <div className="mb-2">
                        <div className="small fw-bolder">Barnett College</div>
                        <div className="small text-muted">Fairfield, NY</div>
                      </div>
                      <div className="fst-italic">
                        <div className="small text-muted">Master's</div>
                        <div className="small text-muted">Web Development</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8"><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.</div></div>
                </div>
              </div>
            </div> */}
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                  <div className="col text-center text-lg-start mb-4 mb-lg-0">
                    <div className="bg-light p-4 rounded-4">
                      <div className="text-secondary fw-bolder mb-2">2018 - 2021</div>
                      <div className="mb-2">
                        <div className="small fw-bolder">Computer Science</div>
                        <div className="small text-muted">Under Graduate</div>
                      </div>
                      {/* <div className="fst-italic">
                        <div className="small text-muted">Undergraduate</div>
                        <div className="small text-muted">Computer Science</div>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-8"><div>About my qualification, I did my BCA with good percentage. After my studies, I did a three-months web development internship at virtuzo infosystems pvt ltd where I learned how to design and implement applications/software. Later I joined my current job.</div></div>
                </div>
              </div>
            </div>
          </section>
          <div className="pb-5"></div>
          <section>
            <div className="card shadow border-0 rounded-4 mb-5">
              <div className="card-body p-5">
                <div className="mb-5">
                  <div className="d-flex align-items-center mb-4">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-tools"></i></div>
                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Professional Skills</span></h3>
                  </div>
                  <div className="row row-cols-1 row-cols-md-3 mb-4">
                    <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web Development</div></div>
                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">SDLC (Software development life cycle)</div></div>
                    <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">User Interface Design</div></div>
                  </div>
                  <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Databases</div></div>
                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Source Control</div></div>
                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Basics of Testing</div></div>
                  </div>
                </div>
                <div className="mb-0">
                  <div className="d-flex align-items-center mb-4">
                    <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i className="bi bi-code-slash"></i></div>
                    <h3 className="fw-bolder mb-0"><span className="text-gradient d-inline">Languages</span></h3>
                  </div>
                  <div className="row row-cols-1 row-cols-md-3 mb-4">
                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML/CSS</div></div>
                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                    <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">React.js</div></div>
                  </div>
                  <div className="row row-cols-1 row-cols-md-3 mb-4">
                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Git</div></div>
                    <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div></div>
                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">MYSQL Database</div></div>
                  </div>
                  <div className="row row-cols-1 row-cols-md-3">
                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Testing and Debugging</div></div>
                    <div className="col"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">Responsive Web Designing Skills</div></div>
                    <div className="col mb-4 mb-md-0"><div className="d-flex align-items-center bg-light rounded-4 p-3 h-100">JS Libraries and Frameworks</div></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Resume