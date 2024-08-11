import { Link } from "react-router-dom";

const Hearder = () => 
    {
  return (
    // <div className="layout-wrapper layout-content-navbar">
    //   <div className="layout-container">
    //     <div className="layout-page">
          <nav
            className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <Link
                className="nav-item nav-link px-0 me-xl-4"
                href="javascript:void(0)"
              >
                <i className="mdi mdi-menu mdi-24px"></i>
              </Link>
            </div>

            <div
              className="navbar-nav-right d-flex align-items-center"
              id="navbar-collapse"
            >
              <div className="navbar-nav align-items-center">
                <div className="nav-item d-flex align-items-center">
                  <i className="mdi mdi-magnify mdi-24px lh-0"></i>
                  <input
                    type="text"
                    className="form-control border-0 shadow-none bg-body"
                    placeholder="Search..."
                    aria-label="Search..."
                  />
                </div>
              </div>

              <ul className="navbar-nav flex-row align-items-center ms-auto">
                <li className="nav-item lh-1 me-3">
                  <Link
                    className="github-button"
                    href="https://github.com/themeselection/materio-bootstrap-html-admin-template-free"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themeselection/materio-bootstrap-html-admin-template-free on GitHub"
                  >
                    Anjali
                    <br/>
                    <small className="text-muted">Admin</small>
                  </Link>
                </li>

                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                  <Link
                    className="nav-link dropdown-toggle hide-arrow p-0"
                    href="javascript:void(0);"
                    data-bs-toggle="dropdown"
                  >
                    <div className="avatar avatar-online">
                      <img
                        src="../assets/img/avatars/1.png"
                        alt
                        className="w-px-40 h-auto rounded-circle"
                      />
                    </div>
                  </Link>
                  <ul className="dropdown-menu dropdown-menu-end mt-3 py-2">
                    <li>
                      <Link className="dropdown-item pb-2 mb-1" href="#">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0 me-2 pe-1">
                            <div className="avatar avatar-online">
                              <img
                                src="../assets/img/avatars/1.png"
                                alt
                                className="w-px-40 h-auto rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="mb-0">Anjali</h6>
                            <small className="text-muted">Admin</small>
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider my-1"></div>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/adminprofile">
                        <i className="mdi mdi-account-outline me-1 mdi-20px"></i>
                        <span className="align-middle">My Profile</span>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/setting">
                        <i className="mdi mdi-cog-outline me-1 mdi-20px"></i>
                        <span className="align-middle" >Settings</span>
                      </Link>
                    </li>
                    <li>
                      <div className="dropdown-divider my-1"></div>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/logout"
                      >
                        <i className="mdi mdi-power me-1 mdi-20px"></i>
                        <span className="align-middle">Log Out</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Hearder;
