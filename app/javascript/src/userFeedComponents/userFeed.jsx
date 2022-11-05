import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../feedsComponents/navbar";
import ProfileCard from "../feedsComponents/profileCard";
import Feedbox from "../feedsComponents/feedbox";


const UserFeed = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="main container">
        <div className="row">
          <div className="profile-trends col-3">
            <ProfileCard />
          </div>
          <Feedbox />
        </div>
      </div>
    </React.Fragment>
  )
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <UserFeed />,
    document.body.appendChild(document.createElement("div"))
  )
})


