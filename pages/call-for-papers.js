import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { confTracks, impDates } from "@/utils/constants";
import Head from "next/head";

const CallForPapers = () => {
  return (
    <>
      <Head>
        <title>OPJU | Archives</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div className="container my-5 pt-5">
        <div className="my-3">
          <h2 className="text-center py-2">Call for Papers</h2>
          <p>
            The proposed 6th International Conference on Information Systems and
            Management Science (ISMS 2023) provides a platform for researchers
            and professionals to share their research and reports of new
            technologies and applications in Information Systems and Management
            Science. The ISMS 2023 aims to bridge the gap between these
            non-coherent disciplines of knowledge and fosters unified
            development in next generation computational models for management
            information systems.
          </p>
          <p>
            All accepted and presented papers will be reviewed for possible
            publication in SPRINGER Lecture Notes in Networks and Systems
            (LNNS).
          </p>
          <p>
            Please consider submitting your works to this conference. We are
            interested in the entire range of concepts from theory to practice,
            including case studies, works-in-progress, and conceptual
            explorations.
          </p>
        </div>
        <div className="py-3">
          <h2>About the Conference</h2>
          <p>
            ISMS 2023 aims to provide a forum for researchers from both academia
            and industry to share their latest research contributions, future
            vision in the field and potential impact across industries of
            information systems and management sciences. Join us, 23-24 December
            2023, to explore discovery, progress, and achievements related to
            various information systems and management sciences. This conference
            is basically focused on advanced automation, computational
            optimization (AI and DL) in all information systems based
            applications as well as include specific plenary sessions, invited
            talks and paper presentations focusing on the applications of IOT in
            the fields of management science, business and Social Media and
            other relevant domains. The ISMS 2023 will provide its attendees an
            uncommon opportunity to expand their network beyond their immediate
            professional environment. It is a unique chance to work with other
            accomplished individuals from diverse areas towards the common goal
            of shaping the future of the communication, computing and society.
          </p>
        </div>
        <div>
          {impDates.map((item, i) => (
            <div
              className="d-flex flex-wrap align-items-center mt-4 border-bottom border-gray pb-1"
              key={i}
            >
              <h4 className="text-primary m-0 text-capitalize col-12 col-md-3">
                {item.date}
              </h4>
              <p className="fs-5 sm:ms-5 mt-0 mb-0 text-capitalize">
                {item.name}
              </p>
            </div>
          ))}
        </div>
        <div className="my-5">
          <h2>Submission Guidelines</h2>
          <p>
            Papers reporting original* and unpublished research results
            pertaining to the related topics are solicited. *(papers with
            plagiarism more than 30% will be outrightly rejected)
          </p>
          <p>
            Full paper manuscripts must be in English of up to 10 pages as per
            Springer format.
          </p>
          <p>
            For authors convenience, Springer has summarized in the Author
            Guidelines document how a proceedings paper should be structured,
            how elements (headings, figures, references) should be formatted
            using our predefined styles, etc. The PDF of the Authors Guidelines
            can be downloaded from the given link or as part of the zip files
            containing the complete sets of instructions and templates for the
            different text preparation systems.
          </p>
          <p>
            Springer has developed LaTeX style files and Word templates to help
            prepare paper. LaTeX is the preferred format for texts containing
            several formulae, but Word templates are also available on the
            following link:{" "}
            <a
              href="https://www.springer.com/gp/authors-editors/conference-proceedings/conference-proceedings-guidelines"
              target="_blank"
            >
              https://www.springer.com/gp/authors-editors/conference-proceedings/conference-proceedings-guidelines
            </a>
          </p>
          <p>
            Submissions should NOT include the author(s), affiliation(s), e-mail
            address(es), and postal address(es) in the manuscripts. Papers will
            be selected based on their originality, timeliness, significance,
            relevance, and clarity of presentation. Paper submission implies the
            intent of at least one of the authors to register and present the
            paper, if accepted.
          </p>
          <p className="text-primary text-center">
            <a
              href="https://equinocs.springernature.com/service/ISMS2023"
              target="_blank"
            >
              The ONLINE submission site is <br />
              Springer OCS <br /> Click here, to submit.
            </a>
          </p>
        </div>
        <div>
          <h2>Acceptance & Publication</h2>
          <p>
            After a double-blind peer review, qualifying Regular Papers may be
            accepted as either Full Papers or Short Papers.
          </p>
          <p>
            All accepted and presented papers of the conference will be reviewed
            for possible publication in SPRINGER LNNS.
          </p>
          <p>
            The papers must be part of the worldwide scholarly discourse in the
            field covered by the library. The reviews will be done to make sure
            papers are relevant for the chosen classifications to ensure
            subscribers receive relevant content.
          </p>
          <p>No extra fee is charged from authors for inclusion in the LNNS.</p>
          <p>
            Authors will grant a non-exclusive, revocable license that allows
            providing services to users.
          </p>
        </div>
        <div className="my-5">
          <h2>Conference Tracks</h2>
          {confTracks.map((item, i) => (
            <div
              className="d-flex flex-wrap mt-5 border-bottom border-gray pb-1"
              key={i}
            >
              <h4 className="text-primary m-0 text-capitalize col-12 col-md-3">
                {item.name}
              </h4>
              <ul className="ps-2">
                {item.data.map((data, i) => (
                  <li className="fs-5 mt-1 mb-0 text-capitalize">{data}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CallForPapers;
