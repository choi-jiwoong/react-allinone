# Install

- npx create-react-app swr
- cd swr
- npm install msw --save-dev
- npx msw init public/ --save
- npm install axios
- npm install swr

# init

## Setting file

- vi src/mocks/browser.js

```js
import { setupWorker } from "msw";
import { handlers } from "./handlers";

export const worker = setupWorker(...handlers);
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
