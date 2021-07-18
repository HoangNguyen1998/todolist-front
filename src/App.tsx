import React from "react";
import "antd/dist/antd.css";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import "./App.css";
import Routers from "./routers";

function App() {
  return (
    <div>
      <Switch>
        {Routers.map((item: any, index: any) => {
          return (
            <Route
              key={index}
              component={item.component}
              exact={item.exact}
              path={item.path}
            />
          );
        })}
      </Switch>
    </div>
  );
}

export default App;
