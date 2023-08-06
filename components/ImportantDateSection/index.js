import { impDates } from "@/utils/constants";

const ImportantDateSection = () => {
  return (
    <div className="container my-5">
      <h2>Important Dates</h2>
      {impDates.map((item, i) => (
        <div
          className="d-flex flex-wrap align-items-center mt-5 border-bottom border-gray pb-1"
          key={i}
        >
          <h4 className="text-primary m-0 text-capitalize col-12 col-md-3">
            {item.date}
          </h4>
          <p className="fs-5 sm:ms-5 mt-0 mb-0 text-capitalize">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ImportantDateSection;
