import Navbar from "@/components/Navbar";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>OPJU | Archives</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="container mt-5 pt-5">
        <p>
          For any Query or issue you are welcome to contact us by sending a mail
          at the following E mail ID: E-mail{" "}
          <a href="mailto:lalit.garg@um.edu.mt">lalit.garg@um.edu.mt</a>{" "}
          <a href="mailto:dssisodia.cs@nitrr.ac.in">dssisodia.cs@nitrr.ac.in</a>{" "}
          <a href="mailto:bhupesh.dewangan@opju.ac.in">
            bhupesh.dewangan@opju.ac.in
          </a>
        </p>
        <p>
          onference Venue/Host Institute**: OP Jindal University, Raigarh,
          India, and University of Malta, Msida, Malta
        </p>
      </div>
    </>
  );
};

export default Contact;
