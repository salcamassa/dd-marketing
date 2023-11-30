import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import logo from '/public/dd-logo.svg'
import styles from "./navbar.module.scss";

const navData = [
  { linkText: "Features", href: '#' },
  { linkText: "Partners", href: '#' },
  { linkText: "Blog", href: '#' },



]

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container">
        <Link href="/">
          <a className={` ${styles.logoLink}`} href="#">
            <Image src={logo} alt="Debtduction Logo" height={100} />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ddNavbar" aria-controls="ddNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="ddNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navData.map((data, index) => (
              <li className={`nav-item ${index == 2 ? 'pe-2' : ''}`} key={index}>
                <Link href={data.href}>
                  <a className={`${router.pathname === data.href ? "active" : ""} nav-link`}>{data.linkText}</a>
                </Link>
              </li>
            ))}
            <li className="nav-item me-2">
              <button className="btn btn-outline-light">Log In</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-success">Start Saving</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;