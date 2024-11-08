import star from "../../images/star.png";

const Restaurents = (props) => {
  const { resdata } = props;
  const { ResName, Cusine, Stars, img } = resdata;
  return (
    <div
      className="overflow-hidden rounded-lg Restaurent-card 
          flex flex-col gap-3  bg-slate-300
          hover:bg-slate-600"
    >
      <div className="w-[250px] h-[200px]">
        <img src={img} className="w-full h-full object-fit" />
      </div>
      <div className="flex flex-row justify-between items-center">
        <h3>{ResName}</h3>
        <div className="flex justify-start items-center">
          <img src={star} height={"40px"} width={"40px"} />
          <p>
            <span>{Stars}</span>
            <span>Stars</span>
          </p>
        </div>
      </div>
      <p>{Cusine}</p>
      <p>ETA : 30mins</p>
    </div>
  );
};

export default Restaurents;
