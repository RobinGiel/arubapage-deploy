import React, { Component } from 'react';
import { Skycons } from 'skycons';
import proxy from '../config/proxy';

    const long = 12.4903;
    const lat = -69.961;
    let CelciusDegree;
    let temperatureDescription;
    let bindIcon;

    const api = proxy + 'https://api.darksky.net/forecast/1afbc4782792106525717c6d6565e9b1/' + long + ',' + lat;

class WeatherWidget extends Component{

  weatherFunction(){

    fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        const {
          temperature,
          summary,
          icon
        } = data.currently;
        let degree = (temperature - 32) * (5 / 9);
        CelciusDegree = Math.floor(degree);
        temperatureDescription = summary;
        bindIcon = icon;
        // set Icon
        setIcons(icon, document.querySelector('.icon'));
      })

    function setIcons(icon, iconID) {
      const skycons = new Skycons({
        color: 'white'
      });
      const currentIcon = icon.replace(/-/g, "_").toUpperCase();
      skycons.play();
      return skycons.set(iconID, Skycons[currentIcon]);
    }

    if (bindIcon) {
      setIcons(bindIcon, document.querySelector('.icon'));
    }

  }

componentDidMount() {
  this.weatherFunction();
}



  render() {
    return (
      <div className="location">
       <canvas className="icon" width="45" height="45"></canvas>
       <p>{CelciusDegree}</p><span style={{'fontSize': 'x-small'}}>C</span>
       <p>{temperatureDescription}</p>
    </div>
    );
  }
}

export default WeatherWidget;