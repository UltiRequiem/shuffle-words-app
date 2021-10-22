/** @jsx h */
import { h, jsx, serve } from "https://deno.land/x/sift@0.4.0/mod.ts";
import React from "https://esm.sh/react";

import styles from "./styles.ts";

import {
  copyToClipboard,
  createElement,
  downloadText,
  shuffleArray,
} from "./utils.ts";

serve({
  "/": homePage,
});

function homePage(request) {
  const [input, setInput] = React.useState("");
  const [lowercase, setLowercase] = React.useState(false);
  const [uppercase, setUppercase] = React.useState(false);

  return jsx(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="favicon.png" />
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <script defer type="module" src="app.js"></script>
        <title>Shuffle Words</title>
      </head>
      <body>
        <div className="container">
          <header>
            <h1>Shuffle a list of words</h1>
          </header>
          <main>
            <div className="form_container">
              <form action="#" id="principal_form">
                <label for="lowercase">
                  Lower Case
                  <input type="checkbox" id="lowercase" name="lowercase" />
                </label>

                <label for="uppercase">
                  Upper Case
                  <input type="checkbox" id="uppercase" name="uppercase" />
                </label>

                <div className="input">
                  <label for="words">Wors To Shuffle:</label>
                  <input
                    type="text"
                    id="words"
                    name="words"
                    value={input}
                    onInput={(e) => setInput(e.target.value)}
                  />
                </div>
                <button id="principal_btn">Shuffle!</button>
              </form>
            </div>

            <textarea id="answer">{shuffleArray(input.split(" "))}</textarea>

            <div id="extra_buttons"></div>
          </main>
          <footer>
            <p>
              <a href="https://github.com/UltiRequiem">
                © {new Date().getFullYear()} Eliaz Bobadilla (aka UltiRequiem)
              </a>
            </p>

            <p>
              This Page is <a href="https://opensource.org">Open Source</a>, you
              can contribute
              <a href="https://github.com/UltiRequiem/shuffle-words-app">
                here
              </a>
              .
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
