import styles from "./style.module.css";

const Header = () => {
  return (
    <header className={`container-fluid ${styles.headerWrapper}`}>
      <div className={`${styles.headerContainer} z-1`}>
        <h1 className="my-3 fw-bold">
          5th International Conference on <br /> Information Systems and
          Management Science (ISMS 2022)
        </h1>
        <h5 className="my-3 fw-bolder fs-4">24-27 November 2022</h5>
        <h6 className="my-3 fw-semibold fs-5">
          The faculty of ICT, University of Malta, Msida, Malta Department of
          Computer Science and Engineering, <br /> National Institute of
          Technology Raipur, India
        </h6>
      </div>
    </header>
  );
};

export default Header;
