/** @jsx h */
import { h, jsx, serve } from "https://deno.land/x/sift@0.4.0/mod.ts";

import {
  copyToClipboard,
  createElement,
  downloadText,
  shuffleArray,
} from "./utils.ts";

serve({
  "/": homePage,
});

const style = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,900&display=swap");

  body {
    font-family: Poppins;
    text-align: center;
    background: blue;
  }

  .container {
    height: 91vh;
    display: flex;
    flex-direction: column;
    align-content: space-between;
    margin: 1%;

    background: #a9a9a9;
  }

  .container header {
    height: 10vh;
    font-size: 3em;
    margin-bottom: 4%;
  }

  .container header h1 {
    background-image: linear-gradient(
      to left,
      yellow,
      violet,
      indigo,
      blue,
      green,
      orange,
      red
    );

    -webkit-background-clip: text;
    color: transparent;
    margin: 1%;
  }

  .container main {
    height: 68vh;
    margin: 5%;
  }

  .container main textarea {
    margin-top: 2%;
    resize: none;
    height: 40%;
    width: 100%;
  }

  .container main .input {
    margin: 2%;
  }

  .container main .input label input {
    margin: 2%;
  }

  .container footer {
    height: 10vh;
    margin-bottom: 4%;
  }

  .secondary_btn {
    margin: 2%;
    border-color: lightgreen;
    border-radius: 15%;
  }

  #principal_btn {
    border-radius: 10px;
    color: red;
  }
`;

function homePage(request) {
  return jsx(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="favicon.png" />
        <style dangerouslySetInnerHTML={{ __html: style }} />
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
              <form action="#" id="principal_form" onSubmit={}>
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
                  <input type="text" id="words" name="words" />
                </div>
                <button id="principal_btn">Shuffle!</button>
              </form>
            </div>

            <textarea id="answer"></textarea>

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

/** Wrapper function to get syntax highlight for CSS in editors. */
function css(style ) {
  return style.join("");
}
