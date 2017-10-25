import React from 'react';
import { render } from 'react-dom';
import ReactDom from 'react-dom';
import Stats from './components/stats';
import Feed from './components/feed';
import './assets/stylesheets/style.less';

document.addEventListener('DOMContentLoaded', () => {
    const statsRoot = document.getElementById('stats-root');
    const feedRoot = document.getElementById('feed-root');
    ReactDom.render(<Stats />, statsRoot);
    ReactDom.render(<Feed />, feedRoot);
});