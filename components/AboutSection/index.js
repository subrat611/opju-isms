import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="container mt-2">
      <div className="d-flex justify-content-around align-items-center flex-wrap">
        <Image src="/image3.png" width="230" height="230" />
        <Image src="/image2.png" width="270" height="100" />
      </div>
      <div className="my-5">
        <h2 className="my-3">Technical Sponsored by</h2>
        <div className="d-flex justify-content-around align-items-center flex-wrap row-gap-3">
          <Image src="/image5.png" width="250" height="100" />
          <Image src="/image4.png" width="240" height="100" />
          <Image src="/image1.png" width="120" height="100" />
        </div>
      </div>
      <h2 className="my-3">About the Conference</h2>
      <p>
        The International Conference on information systems and management
        science (ISMS) 2023 is a meeting point of researchers and practitioners
        that addresses new challenges in data or knowledge acquisition,
        observation, representation, processing, visualization, sharing and
        managing, to facilitate problem-solving, decision-making and management
        in organizations and businesses. The conference welcomes original
        research or applied papers of either practical or theoretical,
        specialized or interdisciplinary nature, state of the art reviews and
        case studies concerning information systems and management science.
        Through sharing and networking, ISMS 2023 will provide an opportunity
        for researchers, practitioners and educators to exchange research
        evidence, practical experiences and innovative ideas on issues related
        to the Conference theme. Please consider submitting to this conference.
        We are interested in the entire range of concepts from theory to
        practice, including case studies, works-in-progress, and conceptual
        explorations.
      </p>
    </section>
  );
};

export default AboutSection;
