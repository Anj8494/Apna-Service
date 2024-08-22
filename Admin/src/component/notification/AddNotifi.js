import { Link, useNavigate } from "react-router-dom";
import Hearder from "../layout/Hearder";
import SideBar from "../layout/SideBar";
import { Select } from "@mui/material";

const AddNotifi = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <SideBar />
          <div className="layout-page">
            <Hearder />
            <div className="content">
              <hearder className="hearder">
                <h1>Notification</h1>
                <p className="p">
                  | Dashboard ---Notification List ---- Add Notification
                </p>
              </hearder>
            </div>
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  <div className="col-xl">
                    <div className="card mb-4">
                      <div className="card-body">
                        <form>
                          <div className="form-floating form-floating-outline mb-4">
                            <small className="text-muted float-start mb-1">
                              Sent Notification to*
                            </small>
                            <div className="input-group input-group-merge">
                              <div className="form-floating form-floating-outline">
                                <div class="form-floating form-floating-outline">
                                  <select
                                    style={{ width: "500px" }}
                                    id="selectTypeOpt"
                                    class="form-select color-dropdown"
                                  >
                                    <option value="text-primary" selected>
                                      All
                                    </option>
                                    <option value="text-secondary">
                                      All Driver
                                    </option>
                                    <option value="text-success">
                                      All Driver Users
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-4">
                            <small className="text-muted float-start mb-1">
                              Title*
                            </small>
                            <div className="input-group input-group-merge">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="text"
                                  id="basic-default-email"
                                  className="form-control"
                                  placeholder="john.doe"
                                  aria-label="john.doe"
                                  aria-describedby="basic-default-email2"
                                  style={{
                                    width: "500px",
                                  }}
                                />
                                <label for="basic-default-email">
                                  Enter Title
                                </label>
                              </div>
                            </div>
                          </div>
                          <small className="text-muted float-start mb-1">
                            description*
                          </small>
                          <div className="form-floating form-floating-outline mb-4">
                            <textarea
                              id="basic-default-message"
                              className="form-control"
                              placeholder="Type Somthing Here"
                              style={{
                                height: "90px",
                                width: "600px",
                                justifyContent: "flex-start",
                                marginTop: "50px",
                              }}
                            ></textarea>
                            <label
                              for="basic-default-message"
                              style={{ textAlign: "start", marginLeft: "90px" }}
                            >
                              Type Something Here
                            </label>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Send
                          </button>
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={() => navigate("/notification")}
                          >
                            Back
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddNotifi;
