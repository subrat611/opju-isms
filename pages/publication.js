import Navbar from "@/components/Navbar";
import Head from "next/head";

const Publication = () => {
  return (
    <>
      <Head>
        <title>OPJU | Publication</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="container mt-5 pt-5">
        <p className="fs-2 fw-semibold text-center">Publication</p>
        <div className="mt-5">
          <p className="text-danger fw-bold">
            ALL ACCEPTED & PRESENTED papers will be published in SCOPUS indexed
            SPRINGER LNNS.
          </p>
          <p className="w-bold">
            Extended versions of few selected papers of good quality may be
            considered for possible publication* in SCOPUS/SCI indexed journal's
            special issues as listed below:
          </p>
          <p className="my-2">
            *The special issues are open for submission of extended versions of
            conference papers and authors need to submit an extended version of
            their conference papers according to the guidelines of the CFP of
            the special issues, if they wish to do so.
          </p>
          <p className="my-2">
            As long as the papers fall within the stated scope of the special
            issue call, they will be considered for the special issue. However,
            there is a peer review process similar to standard journal reviews
            that the manuscripts would undergo to ultimately assess their
            contribution towards the special issues:
          </p>
          <p className="mt-3">The ISMS 2022 organizers have no role.</p>
        </div>
      </div>
    </>
  );
};

export default Publication;
