import React, { Component } from 'react';
import MobileView from './MobileView';
import DesktopView from './DesktopView';

export default class AppPage extends Component {
  render() {
    return (
      <div className="app-page-container">
        <MobileView />
        <DesktopView />
      </div>
    );
  }
}
