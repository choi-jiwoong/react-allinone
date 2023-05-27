# Install

## create app

- npx create-react-app mobx
- cd mobx

## install package

- npm install msw --save-dev
- npx msw init public/ --save
- npm install --save mobx
- npm install mobx-react
- npm install axios

# init

## Setting file

- vi src/app/store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

- vi src/mocks/handlers.js

```js
import { rest } from "msw";

export const handlers = [
  // sample api
  rest.post("/login", (req, res, ctx) => {
    const { username } = req.body;
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        username,
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
];
```

- vi index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux"; // 1
import store from "./app/store"; // 2

// Start the mocking conditionally.
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

##

- npm start
