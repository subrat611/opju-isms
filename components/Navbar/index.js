import { navLinks } from "@/utils/constants";
import Link from "next/link";

import styles from "./style.module.css";

const Navbar = () => {
  return (
    <nav className="container-fluid z-1 navbar navbar-expand-lg position-fixed top-0 start-0 bg-dark py-3 z-2">
      <div className="container-fluid">
        <Link className="navbar-brand text-light fw-bolder" href="/">
          OPJU-ISMS-2022
        </Link>
        <button
          className={`navbar-toggler outline-none ${styles.navHamburger}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNameName="navbar-toggler-icon">
            <svg
              width="28"
              height="28"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#ffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 2H6m5 5H3.5m5 5h-8"
              />
            </svg>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            {navLinks.map((link, i) => (
              <li className="nav-item" key={i}>
                <Link
                  className="nav-link active text-capitalize text-light fw-semibold"
                  aria-current="page"
                  href="#"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
