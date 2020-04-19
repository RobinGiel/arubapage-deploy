import React, { Component } from 'react';
import proxy from '../config/proxy';
import {
  isChrome,
  browserName,
  isAndroid,
  isFirefox
} from 'react-device-detect';

const renderContent = () => {
  if (((isChrome || isFirefox) && !isAndroid)) {
        return `${proxy}http://cdn.setar.aw:1935/Telearuba/smil:telearuba.smil/playlist.m3u8`;
    }else if((browserName === 'Facebook' && isChrome)){
      return `${proxy}http://cdn.setar.aw:1935/Telearuba/smil:telearuba.smil/playlist.m3u8`;
    }else{
        return 'http://cdn.setar.aw:1935/Telearuba/smil:telearuba.smil/playlist.m3u8';
    }
}

let defaultVolume = 1;
const videoOptions = {
    autoplay: false,
    controls: true,
    preload: true,
    fluid: true,
    techOrder: [ 'chromecast', 'html5' ], // You may have more Tech, such as Flash or HLS
    plugins: {
       chromecast: {}
    },
    poster: require('../images/TeleArubaGrey.png'),
    overrideNative: true,
    sources: [{
               src: renderContent(),
               type: 'application/x-mpegURL'
          }]
}

class VideoPlayer extends Component {

  componentDidMount() {
        this.player = window.videojs(this.videoNode, videoOptions, function onPlayerReady() {
            this.volume(defaultVolume);
        });

        this.player.chromecast();
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
        this.player.dispose()
    }
  }

  render() {
    return (
      <div data-vjs-player>
          <video poster="https://arubapage.com/arubapagebanner.JPG" ref={node => this.videoNode = node} className="video-js vjs-default-skin vjs-big-play-centered"></video>
      </div>
    );
  }
}

export default VideoPlayer;