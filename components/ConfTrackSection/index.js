import { confTracks } from "@/utils/constants";

const ConfTrackSection = () => {
  return (
    <div className="container my-5">
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
  );
};

export default ConfTrackSection;
