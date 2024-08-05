// src/router.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from './Pages/MainPage/main';
import Menu from './Pages/MenuPage/menu';
import Blog from './Pages/BlogPage/blog';
import Events from './Pages/EventsPage/events';

const RouterConfig = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/events" element={<Events />} />
   
  </Routes>
);

export default RouterConfig;
