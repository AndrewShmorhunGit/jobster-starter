import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobstar logo" className="logo" />
      </nav>
      <div className="container page">
        {/* {info} */}
        <div className="info">
          <h1>
            job <span> tracking</span> app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            consequuntur, ipsam, ipsa numquam dignissimos aliquid in debitis
            animi repudiandae eum architecto praesentium soluta nemo ex earum
            laborum reprehenderit corporis inventore!
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
