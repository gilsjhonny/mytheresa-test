import React from "react";
import ReactDOMServer from "react-dom/server";
import AppRoot from "../app/AppRoot";

export default () => (req, res) => {
  res.send(`
  <html>
    <head>
      <title>SSR Web</title>
      <link href="/main.css" rel="stylesheet" />
    </head>
    <body>
      <div id="react-root">
        ${ReactDOMServer.renderToString(<AppRoot />)}
      </div>
      <script src="vendors-bundle.js"></script>
      <script src="main-bundle.js"></script>
    </body>
  </html>  
  `);
};
