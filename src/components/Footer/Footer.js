import React from 'react';
import { playlist } from "../../utils/playlist";
import { MediaPlayer } from '@cassette/player';

const Footer = () => {
  return (
    <div id="radio">
       <MediaPlayer playlist={playlist} controls = {['backskip', 'playpause', 'forwardskip', 'volume', 'progress']}/>
    </div>
  );
};

export default Footer;