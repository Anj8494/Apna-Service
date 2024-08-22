import Footer from "../layout/Footer";
import Hearder from "../layout/Hearder";
import SideBar from "../layout/SideBar";

const AdminProfile = () => {
  return (
    <div>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <SideBar />
          <div classNameName="layout-page">
            <Hearder/>
            <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row">
                <div className="col-md-12">
                  <div className="card mb-4">
                    <h4 className="card-header">Profile Details</h4>
                    <div className="card-body pt-2 mt-1">
                      <form id="formAccountSettings" method="POST" onsubmit="return false">
                        <div className="row mt-2 gy-4">
                          <div className="col-md-6">
                            <div className="form-floating form-floating-outline">
                              <input
                                className="form-control"
                                type="text"
                                id="firstName"
                                name="firstName"
                                value="Anjali"
                                autofocus />
                              <label for="firstName">First Name</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating form-floating-outline">
                              <input className="form-control" type="text" name="lastName" id="lastName" value="Shar" />
                              <label for="lastName">Last Name</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating form-floating-outline">
                              <input
                                className="form-control"
                                type="text"
                                id="email"
                                name="email"
                                value="nj65@example.com"
                                placeholder="nj65@example.com" />
                              <label for="email">E-mail</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-group input-group-merge">
                              <div className="form-floating form-floating-outline">
                                <input
                                  type="text"
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  className="form-control"
                                  placeholder="202 555 0111" />
                                <label for="phoneNumber">Phone Number</label>
                              </div>
                              <span className="input-group-text">US (+1)</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                placeholder="Address" />
                              <label for="address">Address</label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <button type="submit" className="btn btn-primary me-2">Save changes</button>
                          <button type="reset" className="btn btn-outline-secondary">Reset</button>
                        </div>
                      </form>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            
            
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminProfile;
