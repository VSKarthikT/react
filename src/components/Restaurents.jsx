import star from "../../images/star.png";

const Restaurents = (props) => {
  const { resdata } = props;
  const { ResName, Cusine, Stars, img } = resdata;

  return (
    <div
      className="overflow-hidden rounded-lg Restaurent-card 
          flex flex-col gap-4 bg-white shadow-md 
          hover:shadow-lg hover:scale-105 transition-transform duration-300"
    >
      {/* Image Section */}
      <div className="w-[250px] h-[200px] overflow-hidden rounded-t-lg">
        <img src={img} className="w-full h-full object-cover" alt={ResName} />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col space-y-2">
        {/* Restaurant Name */}
        <h3 className="text-lg font-semibold text-gray-800">{ResName}</h3>

        {/* Star Rating */}
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">{Cusine}</p>
          <div className="flex items-center">
            <img src={star} alt="Star Icon" className="h-5 w-5 mr-1" />
            <p className="text-sm font-medium text-gray-700">
              {Stars} <span className="text-gray-500">Stars</span>
            </p>
          </div>
        </div>

        {/* ETA */}
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">ETA:</span> 30 mins
        </p>
      </div>
    </div>
  );
};

export default Restaurents;
