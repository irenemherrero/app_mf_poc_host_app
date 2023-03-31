import React from "react";

import LandingPage from "./pages/LandingPage/LandingPage";
import VueRenderer from './renderers/VueRenderer/VueRenderer';
import Content from 'vueApp/Content'

const routes = [
  {
    path: '/',
    element: <LandingPage/>,
    exact: true,
  },
  {
    path: '/vue-app',
    element: <VueRenderer component={Content}/>,
    exact: true,
  },
];

export default routes;