import Image from "next/image";
import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={`container-fluid ${styles.headerWrapper}`}>
      <div className={`${styles.headerContainer} z-1`}>
        <h1 className="my-3 fw-bold">
          6th International Conference on <br /> Information Systems and
          Management Science (ISMS 2023)
        </h1>
        <h5 className="my-3 fw-bolder fs-4">
          2023, 23-24 December 2023, Raipur, India
        </h5>
        <p className="fs-3 fw-semibold">Jointly organized by</p>
        <h6 className="my-3 fw-semibold fs-5">
          Department of Computer Science and Engineering, OP Jindal University,
          Raigarh, India <br />
          and <br /> The faculty of ICT, University of Malta, Msida, Malta
        </h6>
        <h7 className="fw-semibold fs-5">
          Conference Proceedings <br /> ALL ACCEPTED & PRESENTED papers will be
          published in <span className="text-warning">SCOPUS</span>
          indexed <span className="text-warning">SPRINGER LNNS</span>.
        </h7>
        <div className="mt-5">
          <Image src="/image7.png" width="210" height="140" />
        </div>
      </div>
    </header>
  );
};

export default Header;
