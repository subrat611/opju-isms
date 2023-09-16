import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";

const Sponsors = () => {
  return (
    <>
      <Head>
        <title>OPJU | Sponsors</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="container mt-5 pt-5">
        <h2 className="fw-semibold text-center">Sponsors</h2>
        <p>ISMS 2022 is technically and financially sponsored/promoted by:</p>
        <div className="mb-5">
          <div className="d-flex justify-content-around align-items-center flex-wrap">
            <Image src="/image3.png" width="230" height="230" />
            <Image src="/image2.png" width="270" height="100" />
          </div>
          <div className="d-flex justify-content-around align-items-center flex-wrap row-gap-3">
            <Image src="/image5.png" width="250" height="100" />
            <Image src="/image4.png" width="240" height="100" />
            <Image src="/image1.png" width="120" height="100" />
          </div>
        </div>
        <p>
          As a sponsor of the ISMS 2022 you will have numerous opportunities to
          reach a variety of organizations.
        </p>
        <p>
          This is a very important event to showcase not only your interest and
          commitment to defending against Internet of Things, but your expertise
          as well. Additionally, you will have the capability to collaborate
          with vendors on finding out the interests and challenges of our
          attendees in order to provide them with IoT solutions.
        </p>
        <p>
          We thank you in advance for your commitment and support and look
          forward to seeing you there! Contact Us for More Info
        </p>
        <h6 className="fw-bold">What We Offer</h6>
        <p>
          Aside from the ISMS 2020 Conference, We offer numerous opportunities
          for you and your organization to connect with student affairs
          professionals. Below are three of our most popular sponsorship
          packages:
        </p>
        <ul>
          <li>
            <p className="fw-bold">Bronze Level Sponsor - $1,000</p>
            <p>
              Company name and hyperlink recognizing on conference website.{" "}
              <br />
              Recognition as a bronze conference sponsor in program guide.{" "}
              <br />
              Sign recognition at the event. <br />
              FREE Registration for FOUR Attendees.
            </p>
          </li>
          <li>
            <p className="fw-bold">Silver Level Sponsor - $2,000</p>
            <p>
              Company name, logo, and hyperlink recognizing on conference
              website. <br />
              Recognition as a silver conference sponsor in program guide.{" "}
              <br /> Sign recognition at the event. <br />
              FREE Registration for SEVEN Attendees. <br /> Exhibit table
              opportunity (table fee included). <br /> 1/2 page and program
              guide. <br /> Verbal recognition at the event.
            </p>
          </li>
          <li>
            <p className="fw-bold">Gold Level Sponsor - $3,000</p>
            <p>
              Company name, logo, and hyperlink recognizing on conference
              website. <br />
              Recognition as a gold conference sponsor in program guide. <br />
              Sign recognition at the event. <br />
              FREE Registration for TEN Attendees. <br />
              Exhibit table booth opportunity (booth fee included). <br />
              Full page ad program guide. <br />
              Verbal recognition at the event. <br />
              Sponsorship of Lunch at event. <br />
              Eligibility to sponsor a major speaker at the event or speak as a
              featured speaker. <br />
              Banner ad on event. <br />
            </p>
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Sponsors;
