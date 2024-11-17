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
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <div className="flex items-center space-x-4">
          {/* User Avatar */}
          <img
            className="w-16 h-16 rounded-full border border-gray-300"
            src={avatar_url}
            alt="avatar"
          />
          {/* User Info */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Name: {name}
            </h2>
            <h3 className="text-lg text-gray-600">Location: {location}</h3>
            <h4 className="text-sm text-gray-500 mt-2">Contact: @karthiktvs</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
