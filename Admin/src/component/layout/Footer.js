import { Link } from "react-router-dom";

const Footer=()=>{
    return<div>
         <div className="layout-wrapper layout-content-navbar">
         <div className="layout-container">
         <footer className="content-footer footer bg-footer-theme">
              <div className="container-xxl">
                <div
                  className="footer-container d-flex align-items-center justify-content-between py-3 flex-md-row flex-column">
                  <div className="text-body mb-2 mb-md-0">
                    ©
                    <script>
                      document.write(new Date().getFullYear());
                    </script>
                    , made with <span className="text-danger"><i className="tf-icons mdi mdi-heart"></i></span> by
                    <Link href="https://themeselection.com" target="_blank" className="footer-link fw-medium"
                      >ThemeSelection</Link
                    >
                  </div>
                  <div className="d-none d-lg-inline-block">
                    <Link href="https://themeselection.com/license/" className="footer-link me-3" target="_blank">License</Link>
                    <Link href="https://themeselection.com/" target="_blank" className="footer-link me-3">More Themes</Link>

                    <Link
                      href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/documentation/"
                      target="_blank"
                      className="footer-link me-3"
                      >Documentation</Link
                    >

                    <Link
                      href="https://github.com/themeselection/materio-bootstrap-html-admin-template-free/issues"
                      target="_blank"
                      className="footer-link"
                      >Support</Link
                    >
                  </div>
                </div>
              </div>
            </footer>


            </div>
            </div>

    </div>
}
export default Footer;