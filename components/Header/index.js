import Link from "next/link";
import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={`container-fluid ${styles.headerWrapper}`}>
      <div className={`${styles.headerContainer} z-1`}>
        <p className={`my-3 fw-bold ${styles.headerTextOne}`}>
          6th International Conference on <br /> Information Systems and
          Management Science (ISMS 2023)
        </p>
        <p className={`my-3 fw-bolder ${styles.headerTextTwo}`}>
          23-24 December 2023, Raipur, India
        </p>
        <p className={`fw-semibold ${styles.headerTextThree}`}>
          Jointly organized by
        </p>
        <h6 className={`my-3 fw-semibold ${styles.headerTextFour}`}>
          Department of Computer Science and Engineering, OP Jindal University,
          Raigarh, India <br />
          and <br /> The faculty of ICT, University of Malta, Msida, Malta
        </h6>
        <h7 className={`fw-semibold ${styles.headerTextFive}`}>
          Conference Proceedings <br /> ALL ACCEPTED & PRESENTED papers will be
          published in <span className="text-warning">SCOPUS</span>
          indexed <span className="text-warning">SPRINGER LNNS</span>.
        </h7>
        <div className="mt-md-5 mt-2 mb-2">
          <img
            className={`bg-white p-2 rounded ${styles.headerBottomImage}`}
            src="/image7.png"
            width="200"
            height="130"
          />
        </div>
      </div>
      <button type="button" class="btn btn-primary z-3">
        <a
          className="text-light text-uppercase fw-semibold"
          href="https://equinocs.springernature.com/service/ISMS2023"
          target="_blank"
        >
          Submit your paper
        </a>
      </button>
      <div className={styles.scroll_left}>
        <a
          target="_blank"
          href="/Paper_ID.pptx"
          download
          className="fs-5 fw-semibold text-warning"
        >
          Download Template for paper presentation
        </a>
      </div>
    </header>
  );
};

export default Header;
