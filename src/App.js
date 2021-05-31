import React, { memo,Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { Provider }from "react-redux"

import store from "./store"
import routes from './router';

import HYAppFooter from "@/components/app-footer";
import HYAppHeader from "@/components/app-header";
import { HashRouter } from 'react-router-dom';

import HYAppPlayerBar from "./pages/player/app-player-bar";

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
      <HYAppHeader/>
      <Suspense fallback={<div>page loading</div>}>
      {renderRoutes(routes)}
      </Suspense>
      <HYAppFooter/>
      <HYAppPlayerBar/>
      </HashRouter>
    </Provider>
  )
})
