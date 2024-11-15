//Class based components
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/VSKarthikT");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: {
        name: json.name,
        location: json.location,
        avatar_url: json.avatar_url,
      },
    });
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    //Return some jsx
    return (
      <div className="flex flex-col items-start p-5 border-2 border-solid border-black">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <img className="w-[50px] h-[50px]" src={avatar_url} alt="avatar" />
        <h4>Contact: @karthiktvs</h4>
      </div>
    );
  }
}

export default UserClass;
