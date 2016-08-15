import React from 'react';

import SettingsMenu from './settingsMenu';
import Search from './search';

import '../css/banner.scss';

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <img id="banner-image" src="img/banner.png" alt="banner" />
        <SettingsMenu />
        <Search />
      </div>
    );
  }
}


export default Banner;
