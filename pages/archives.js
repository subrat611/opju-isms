import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const Archives = () => {
  return (
    <>
      <Head>
        <title>OPJU | Archives</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h2 className="text-center fw-semibold">Archives</h2>

        <div className="mt-5">
          <p className="fw-bold text-primary">ISMS 2022</p>
          <p>
            All accepted and presented papers of the conference are to be
            published in SPRINGER-LNNS Series.
            <br />
            <br />
            Pls visit{" "}
            <a href="https://link.springer.com/book/10.1007/978-3-031-31153-6">
              https://link.springer.com/book/10.1007/978-3-031-31153-6
            </a>
            <br />
            <br />
            ** INDEXING: Indexed by SCOPUS, DBLP, INSPEC, WTI Frankfurt eG,
            zbMATH, Japanese Science and Technology Agency (JST). All books
            published in the series are submitted for consideration in Web of
            Science.**
          </p>

          <div className="mt-5">
            <p className="fw-bold text-primary">ISMS 2021</p>
            <p>
              All accepted and presented papers of the conference are to be
              published in SPRINGER-LNNS Series.
              <br />
              <br />
              Pls visit{" "}
              <a href="https://link.springer.com/book/10.1007/978-3-030-86223-7">
                https://link.springer.com/book/10.1007/978-3-030-86223-7
              </a>
              <br />
              <br />
              ** INDEXING: Indexed by SCOPUS, DBLP, INSPEC, WTI Frankfurt eG,
              zbMATH, Japanese Science and Technology Agency (JST). All books
              published in the series are submitted for consideration in Web of
              Science.**
            </p>
          </div>

          <div className="mt-5">
            <p className="fw-bold text-primary">ISMS 2020</p>
            <p>
              All accepted and presented papers of the conference are published
              in SPRINGER-LNNS Series.
              <br />
              <br />
              Pls visit{" "}
              <a href="https://link.springer.com/book/10.1007/978-3-030-86223-7">
                https://link.springer.com/book/10.1007/978-3-030-86223-7
              </a>
              <br />
              <br />
              ** INDEXING: Indexed by SCOPUS, DBLP, INSPEC, WTI Frankfurt eG,
              zbMATH, Japanese Science and Technology Agency (JST). All books
              published in the series are submitted for consideration in Web of
              Science.**
            </p>
          </div>

          <div className="mt-5">
            <p className="fw-bold text-primary">ISMS 2019</p>
            <p>
              All accepted and presented papers of the conference published in
              ELSEVIER SSRN digital library.
              <br />
              <br />
              Pls visit{" "}
              <a href="https://www.ssrn.com/index.cfm/en/isn/ads/02052020ann004/">
                https://www.ssrn.com/index.cfm/en/isn/ads/02052020ann004/
              </a>
              <br />
              <br />
              ** INDEXING: TThe papers of this series are submitted to DBLP,
              Google Scholar. **
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Archives;
