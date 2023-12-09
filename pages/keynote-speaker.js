import Navbar from "@/components/Navbar";
import { KeynoteSpeaker } from "@/utils/constants";
import Head from "next/head";

const Keynotespeaker = () => {
  return (
    <div>
      <Head>
        <title>OPJU</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container my-5 pt-5">
        <h2 className="fw-semibold text-center">Keynote speakers</h2>
        <div className="d-flex justify-content-center flex-wrap">
          {KeynoteSpeaker.map((item, i) => (
            <div class="card mt-5 mx-1 responsive_card" key={i}>
              <div class="row g-0">
                <div class="col-md-auto">
                  <img
                    src={item.img}
                    alt="profing"
                    className="keynoteimgsize"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    {item.role !== "" && (
                      <h4 className="fw-semibold text-primary">{item.role}</h4>
                    )}
                    <h5 class="card-title">{item.name}</h5>
                    {item.deg !== "" && (
                      <p class="card-text">
                        <small class="text-body-secondary">{item.deg}</small>
                      </p>
                    )}
                    <p class="card-text">{item.uni}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keynotespeaker;
