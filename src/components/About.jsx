import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About the website</h1>
      <h2>This is desc</h2>
      {/* <User name={"karthiktvs"} location={"Location: Peoria, Illonois"} /> */}
      {/* Class based component */}
      <UserClass name={"karthiktvs"} location={"Location: Peoria, Illonois"} />
    </div>
  );
};

export default About;
