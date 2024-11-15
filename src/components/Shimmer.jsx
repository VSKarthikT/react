const Shimmer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          style={{
            position: "relative",
            width: "200px",
            height: "250px",
            backgroundColor: "#f6f7f8",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "-100%",
              width: "150%",
              height: "100%",
              backgroundImage:
                "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0))",
              animation: "shimmer 1.5s infinite",
            }}
          ></div>
        </div>
      ))}
      <style>
        {`
          @keyframes shimmer {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Shimmer;
