import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "Heading" }, "React🚀");

//JSX
const Title = (
  <h1 id="Heading" className="Heading">
    Heading using JSX react
  </h1>
);
const Title1 = () => (
  <h1 id="Heading" className="Heading">
    Heading using JSX conmpnent
  </h1>
);
//React funcitonal component
const HeadingComponent = () => {
  return <h1>React functional component</h1>;
};
//OR We can write in beow
const HeadingComponent1 = () => (
  <div className="conatiner">
    {Title}
    <Title1 />
    <h1 className="Heading">React functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
//root.render(jsxHeading);
root.render(<HeadingComponent1 />);
