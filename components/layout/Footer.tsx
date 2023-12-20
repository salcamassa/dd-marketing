import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <nav className="dd-footer">
      <div className="d-flex align-items-center justify-content-between pb-3">
        <div>
          <div className="fw-bold">Sign up for our newsletter</div>
          <div>Get the latest updates delivered straight to your inbox.</div>
        </div>
        <div className="d-flex">
          <input type="text" className="form-control form-control-sm" placeholder="Enter your email" />
          <button className="btn btn-success ms-2 btn-sm">Subscribe</button>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between footer-bottom pt-1">
        <Link className="pt-1" href="/">© 2023 Debtduction LLC. All rights reserved.  </Link>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div className="fs-3 pe-2">
              <FiMail />
            </div>
            <div className="pt-1">support@debtduction.com</div>
          </div>
          <div>
            <div className="footer-social-icons">
              <div>
                <a
                  target="_blank"
                  href="https://www.instagram.com/"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}
export default Footer

