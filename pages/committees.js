import Head from "next/head";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { committees } from "@/utils/constants";

const Committees = () => {
  return (
    <>
      <Head>
        <title>OPJU | Committees</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="container-fluid mt-5 pt-5 text-center">
        <h2 className="fw-semibold">Committees</h2>
        <div className="mt-4">
          {committees.map(({ title, persons }, i) => (
            <div className="mt-4">
              <p className="fs-4 fw-bold">{title}</p>
              {persons.map((person, i) => (
                <div className="my-3">
                  <p className="fw-bold m-0 p-0">{person.name}</p>
                  <p className="m-0 p-0">{person.place}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Committees;
