import React from 'react';
import { browserName } from 'react-device-detect'
import VideoPlayer from "../components/VideoPlayer";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <section className="jumbotron text-center">
          <div className="container">
              <h1 className="jumbotron-heading">Welcome to Aruba Page</h1>
              <p className="lead text-muted">One Happy Island, One well informed Aruban</p>
              <p>
                  <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      Click to watch Tele Aruba live!
                  </button>
              </p>
              <div className="collapse" id="collapseExample">
                  <VideoPlayer />
              </div>
              <div id="browsercheck">Your browser is: {browserName}, Aruba page works well on Chrome, Firefox and Edge</div>
          </div>
      </section>
  </div>
  );
};

export default Jumbotron;