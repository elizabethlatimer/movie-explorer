import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="photoAttribution">
      <p>Background Photo by Jeremy Yap on Unsplash</p>
      <div><img className="TMDBlogo" src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
        alt="The Movie Database Logo" /> This app uses the TMDb API but is not endorsed or certified by TMDb.</div>
    </div>
  )
}

export default Footer;